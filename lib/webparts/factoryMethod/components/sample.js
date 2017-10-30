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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var React = require("react");
/* tslint:enable:no-unused-variable */
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var DetailsList_1 = require("office-ui-fabric-react/lib/DetailsList");
var MarqueeSelection_1 = require("office-ui-fabric-react/lib/MarqueeSelection");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var _items = [];
var _columns = [
    {
        key: 'column1',
        name: 'Name',
        fieldName: 'name',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
    },
    {
        key: 'column2',
        name: 'Value',
        fieldName: 'value',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
    },
];
var DetailsListCompactExample = (function (_super) {
    __extends(DetailsListCompactExample, _super);
    function DetailsListCompactExample() {
        var _this = _super.call(this) || this;
        // Populate with items for demos.
        if (_items.length === 0) {
            for (var i = 0; i < 200; i++) {
                _items.push({
                    key: i,
                    name: 'Item ' + i,
                    value: i
                });
            }
        }
        _this._selection = new DetailsList_1.Selection({
            onSelectionChanged: function () { return _this.setState({ selectionDetails: _this._getSelectionDetails() }); }
        });
        _this.state = {
            items: _items,
            selectionDetails: _this._getSelectionDetails()
        };
        return _this;
    }
    DetailsListCompactExample.prototype.render = function () {
        var _a = this.state, items = _a.items, selectionDetails = _a.selectionDetails;
        return (React.createElement("div", null,
            React.createElement("div", null, selectionDetails),
            React.createElement(TextField_1.TextField, { label: 'Filter by name:', onChanged: this._onChanged }),
            React.createElement(MarqueeSelection_1.MarqueeSelection, { selection: this._selection },
                React.createElement(DetailsList_1.DetailsList, { items: items, columns: _columns, setKey: 'set', layoutMode: DetailsList_1.DetailsListLayoutMode.fixedColumns, selection: this._selection, selectionPreservedOnEmptyClick: true, onItemInvoked: this._onItemInvoked, compact: true }))));
    };
    DetailsListCompactExample.prototype._getSelectionDetails = function () {
        var selectionCount = this._selection.getSelectedCount();
        switch (selectionCount) {
            case 0:
                return 'No items selected';
            case 1:
                return '1 item selected: ' + this._selection.getSelection()[0].name;
            default:
                return selectionCount + " items selected";
        }
    };
    DetailsListCompactExample.prototype._onChanged = function (text) {
        this.setState({ items: text ? _items.filter(function (i) { return i.name.toLowerCase().indexOf(text) > -1; }) : _items });
    };
    DetailsListCompactExample.prototype._onItemInvoked = function (item) {
        alert("Item invoked: " + item.name);
    };
    __decorate([
        Utilities_1.autobind
    ], DetailsListCompactExample.prototype, "_onChanged", null);
    return DetailsListCompactExample;
}(React.Component));
exports.DetailsListCompactExample = DetailsListCompactExample;

//# sourceMappingURL=sample.js.map
