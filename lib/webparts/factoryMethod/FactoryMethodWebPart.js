"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("FactoryMethodWebPartStrings");
var FactoryMethod_1 = require("./components/FactoryMethod");
var lodash = require("@microsoft/sp-lodash-subset");
var sp_core_library_2 = require("@microsoft/sp-core-library");
var MockDataProvider_1 = require("./test/MockDataProvider");
var SharepointDataProvider_1 = require("./components/dataproviders/SharepointDataProvider");
var FactoryMethodWebPart = (function (_super) {
    __extends(FactoryMethodWebPart, _super);
    function FactoryMethodWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FactoryMethodWebPart.prototype.onInit = function () {
        var _this = this;
        this.context.statusRenderer.displayLoadingIndicator(this.domElement, "Todo");
        /*
        Create the appropriate data provider depending on where the web part is running.
        The DEBUG flag will ensure the mock data provider is not bundled with the web part when you package the
         solution for distribution, that is, using the --ship flag with the package-solution gulp command.
        */
        if (DEBUG && sp_core_library_2.Environment.type === sp_core_library_2.EnvironmentType.Local) {
            this._dataProvider = new MockDataProvider_1.default();
        }
        else {
            this._dataProvider = new SharepointDataProvider_1.default();
            this._dataProvider.webPartContext = this.context;
        }
        this.openPropertyPane = this.openPropertyPane.bind(this);
        /*
        Get the list of tasks lists from the current site and populate the property pane dropdown field with the values.
        */
        this.loadLists()
            .then(function () {
            /*
             If a list is already selected, then we would have stored the list Id in the associated web part property.
             So, check to see if we do have a selected list for the web part. If we do, then we set that as the selected list
             in the property pane dropdown field.
            */
            if (_this.properties.spListIndex) {
                _this.setSelectedList(_this.properties.spListIndex.toString());
                _this.context.statusRenderer.clearLoadingIndicator(_this.domElement);
            }
        });
        return _super.prototype.onInit.call(this);
    };
    // render method of the webpart, actually calls Component
    FactoryMethodWebPart.prototype.render = function () {
        var element = React.createElement(FactoryMethod_1.default, {
            spHttpClient: this.context.spHttpClient,
            siteUrl: this.context.pageContext.web.absoluteUrl,
            listName: this._dataProvider.selectedList === undefined ? "GenericList" : this._dataProvider.selectedList.Title,
            dataProvider: this._dataProvider,
            configureStartCallback: this.openPropertyPane
        });
        // reactDom.render(element, this.domElement);
        this._factorymethodContainerComponent = ReactDom.render(element, this.domElement);
    };
    // loads lists from the site and fill the dropdown.
    FactoryMethodWebPart.prototype.loadLists = function () {
        var _this = this;
        return this._dataProvider.getLists()
            .then(function (lists) {
            // disable dropdown field if there are no results from the server.
            _this._disableDropdown = lists.length === 0;
            if (lists.length !== 0) {
                _this._dropdownOptions = lists.map(function (list) {
                    return {
                        key: list.Id,
                        text: list.Title
                    };
                });
            }
        });
    };
    Object.defineProperty(FactoryMethodWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    FactoryMethodWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        /*
        Check the property path to see which property pane feld changed. If the property path matches the dropdown, then we set that list
        as the selected list for the web part.
        */
        if (propertyPath === "spListIndex") {
            this.setSelectedList(newValue);
        }
        /*
        Finally, tell property pane to re-render the web part.
        This is valid for reactive property pane.
        */
        _super.prototype.onPropertyPaneFieldChanged.call(this, propertyPath, oldValue, newValue);
    };
    // sets the selected list based on the selection from the dropdownlist
    FactoryMethodWebPart.prototype.setSelectedList = function (value) {
        var selectedIndex = lodash.findIndex(this._dropdownOptions, function (item) { return item.key === value; });
        var selectedDropDownOption = this._dropdownOptions[selectedIndex];
        if (selectedDropDownOption) {
            this._selectedList = {
                Title: selectedDropDownOption.text,
                Id: selectedDropDownOption.key.toString()
            };
            this._dataProvider.selectedList = this._selectedList;
        }
    };
    // we add fields dynamically to the property pane, in this case its only the list field which we will render
    FactoryMethodWebPart.prototype.getGroupFields = function () {
        var fields = [];
        // we add the options from the dropdownoptions variable that was populated during init to the dropdown here.
        fields.push(sp_webpart_base_1.PropertyPaneDropdown("spListIndex", {
            label: "Select a list",
            disabled: this._disableDropdown,
            options: this._dropdownOptions
        }));
        /*
        When we do not have any lists returned from the server, we disable the dropdown. If that is the case,
        we also add a label field displaying the appropriate message.
        */
        if (this._disableDropdown) {
            fields.push(sp_webpart_base_1.PropertyPaneLabel(null, {
                text: "Could not find tasks lists in your site. Create one or more tasks list and then try using the web part."
            }));
        }
        return fields;
    };
    FactoryMethodWebPart.prototype.openPropertyPane = function () {
        this.context.propertyPane.open();
    };
    FactoryMethodWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            /*
                            Instead of creating the fields here, we call a method that will return the set of property fields to render.
                            */
                            groupFields: this.getGroupFields()
                        }
                    ]
                }
            ]
        };
    };
    return FactoryMethodWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = FactoryMethodWebPart;

//# sourceMappingURL=FactoryMethodWebPart.js.map
