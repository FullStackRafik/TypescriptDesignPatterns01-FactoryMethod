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
//#region Imports
var React = require("react");
var ListItemFactory_1 = require("./ListItemFactory");
var DetailsList_1 = require("office-ui-fabric-react/lib/DetailsList");
//#endregion
var FactoryMethod = (function (_super) {
    __extends(FactoryMethod, _super);
    function FactoryMethod(props, state) {
        var _this = _super.call(this, props) || this;
        // reusable inline component
        _this.ListMarqueeSelection = function (itemState) { return (React.createElement("div", null,
            React.createElement(DetailsList_1.DetailsList, { items: itemState.items, columns: itemState.columns, setKey: "set", layoutMode: DetailsList_1.DetailsListLayoutMode.fixedColumns, selectionPreservedOnEmptyClick: true, compact: true }))); };
        _this.setInitialState();
        return _this;
    }
    // lifecycle help here: https://staminaloops.github.io/undefinedisnotafunction/understanding-react/
    //#region Mouting events lifecycle
    // the data returned from render is neither a string nor a DOM node.
    // it's a lightweight description of what the DOM should look like.
    // inspects this.state and this.props and create the markup.
    // when your data changes, the render method is called again.
    // react diff the return value from the previous call to render with
    // the new one, and generate a minimal set of changes to be applied to the DOM.
    FactoryMethod.prototype.render = function () {
        switch (this.props.listName) {
            case "GenericList":
                // tslint:disable-next-line:max-line-length
                return React.createElement(this.ListMarqueeSelection, { items: this.state.DetailsListItemState.items, columns: this.state.columns });
            case "News":
                // tslint:disable-next-line:max-line-length
                return React.createElement(this.ListMarqueeSelection, { items: this.state.DetailsNewsListItemState.items, columns: this.state.columns });
            case "Announcements":
                // tslint:disable-next-line:max-line-length
                return React.createElement(this.ListMarqueeSelection, { items: this.state.DetailsAnnouncementListItemState.items, columns: this.state.columns });
            case "Directory":
                // tslint:disable-next-line:max-line-length
                return React.createElement(this.ListMarqueeSelection, { items: this.state.DetailsDirectoryListItemState.items, columns: this.state.columns });
            default:
                return null;
        }
    };
    // invoked once, only on the client (not on the server), immediately AFTER the initial rendering occurs.
    FactoryMethod.prototype.componentDidMount = function () {
        // you can access any refs to your children
        // (e.g., to access the underlying DOM representation - ReactDOM.findDOMNode).
        // the componentDidMount() method of child components is invoked before that of parent components.
        // if you want to integrate with other JavaScript frameworks,
        // set timers using setTimeout or setInterval,
        // or send AJAX requests, perform those operations in this method.
        this._configureWebPart = this._configureWebPart.bind(this);
        this.readItemsAndSetStatus("");
    };
    //#endregion
    //#region Props changes lifecycle events (after a property changes from parent component)
    FactoryMethod.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.listName !== this.props.listName) {
            this.readItemsAndSetStatus(nextProps.listName);
        }
    };
    //#endregion
    //#region private methods
    FactoryMethod.prototype._configureWebPart = function () {
        this.props.configureStartCallback();
    };
    FactoryMethod.prototype.setInitialState = function () {
        this.state = {
            type: "ListItem",
            status: this.listNotConfigured(this.props)
                ? "Please configure list in Web Part properties"
                : "Ready",
            columns: [],
            DetailsListItemState: {
                items: []
            },
            DetailsNewsListItemState: {
                items: []
            },
            DetailsDirectoryListItemState: {
                items: []
            },
            DetailsAnnouncementListItemState: {
                items: []
            },
        };
    };
    // read items using factory method pattern and sets state accordingly
    FactoryMethod.prototype.readItemsAndSetStatus = function (nextListName) {
        var _this = this;
        this.setState({
            status: "Loading all items..."
        });
        var factory = new ListItemFactory_1.ListItemFactory();
        factory.getItems(this.props.spHttpClient, this.props.siteUrl, nextListName)
            .then(function (items) {
            var keyPart = _this.props.listName === "GenericList" ? "" : nextListName;
            // the explicit specification of the type argument `keyof {}` is bad and
            // it should not be required.
            _this.setState((_a = {
                    status: "Successfully loaded " + items.length + " items"
                },
                _a["Details" + keyPart + "ListItemState"] = {
                    items: items
                },
                _a.columns = DetailsList_1.buildColumns(items),
                _a));
            var _a;
        });
    };
    FactoryMethod.prototype.listNotConfigured = function (props) {
        return props.listName === undefined ||
            props.listName === null ||
            props.listName.length === 0;
    };
    return FactoryMethod;
}(React.Component));
exports.default = FactoryMethod;

//# sourceMappingURL=FactoryMethod.js.map
