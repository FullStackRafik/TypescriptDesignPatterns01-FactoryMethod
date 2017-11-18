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
        if (this.state.hasError) {
            // you can render any custom fallback UI
            return React.createElement("h1", null, "Something went wrong.");
        }
        else {
            switch (this.props.listName) {
                case "GenericList":
                    // tslint:disable-next-line:max-line-length
                    return React.createElement(this.ListMarqueeSelection, { items: this.state.DetailsGenericListItemState.items, columns: this.state.columns });
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
        }
    };
    FactoryMethod.prototype.componentDidCatch = function (error, info) {
        // display fallback UI
        this.setState({ hasError: true });
        // you can also log the error to an error reporting service
        console.log(error);
        console.log(info);
    };
    // componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here.
    // if you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    // this method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().
    // calling setState() in this method will trigger an extra rendering, but it is guaranteed to flush during the same tick.
    // this guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state.
    // use this pattern with caution because it often causes performance issues. It can, however, be necessary for cases like modals and
    // tooltips when you need to measure a DOM node before rendering something that depends on its size or position.
    FactoryMethod.prototype.componentDidMount = function () {
        this._configureWebPart = this._configureWebPart.bind(this);
        this.readItemsAndSetStatus();
    };
    //#endregion
    //#region Props changes lifecycle events (after a property changes from parent component)
    // componentWillReceiveProps() is invoked before a mounted component receives new props.
    // if you need to update the state in response to prop
    // changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions
    // using this.setState() in this method.
    // note that React may call this method even if the props have not changed, so make sure to compare the current
    // and next values if you only want to handle changes.
    // this may occur when the parent component causes your component to re-render.
    // react doesn’t call componentWillReceiveProps() with initial props during mounting. It only calls this
    // method if some of component’s props may update
    // calling this.setState() generally doesn’t trigger componentWillReceiveProps()
    FactoryMethod.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.listName !== this.props.listName) {
            this.readItemsAndSetStatus();
        }
    };
    //#endregion
    //#region private methods
    FactoryMethod.prototype._configureWebPart = function () {
        this.props.configureStartCallback();
    };
    FactoryMethod.prototype.setInitialState = function () {
        this.state = {
            hasError: false,
            status: this.listNotConfigured(this.props)
                ? "Please configure list in Web Part properties"
                : "Ready",
            columns: [],
            DetailsGenericListItemState: {
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
    FactoryMethod.prototype.readItemsAndSetStatus = function () {
        var _this = this;
        this.setState({
            status: "Loading all items..."
        });
        var factory = new ListItemFactory_1.ListItemFactory();
        factory.getItems(this.props.spHttpClient, this.props.siteUrl, this.props.listName)
            .then(function (items) {
            var myItems = null;
            switch (_this.props.listName) {
                case "GenericList":
                    myItems = items;
                    break;
                case "News":
                    myItems = items;
                    break;
                case "Announcements":
                    myItems = items;
                    break;
                case "Directory":
                    myItems = items;
                    break;
            }
            var keyPart = _this.props.listName === "GenericList" ? "" : _this.props.listName;
            // the explicit specification of the type argument `keyof {}` is bad and
            // it should not be required.
            _this.setState((_a = {
                    status: "Successfully loaded " + items.length + " items"
                },
                _a["Details" + keyPart + "ListItemState"] = {
                    myItems: myItems
                },
                _a.columns = DetailsList_1.buildColumns(myItems),
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
