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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var React = require("react");
/* tslint:enable:no-unused-variable */
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var DetailsList_1 = require("office-ui-fabric-react/lib/DetailsList");
var example_app_base_1 = require("@uifabric/example-app-base");
require("./DetailsListExample.scss");
var _items = [];
var fileIcons = [
    { 'name': 'accdb' },
    { 'name': 'csv' },
    { 'name': 'docx' },
    { 'name': 'dotx' },
    { 'name': 'mpp' },
    { 'name': 'mpt' },
    { 'name': 'odp' },
    { 'name': 'ods' },
    { 'name': 'odt' },
    { 'name': 'one' },
    { 'name': 'onepkg' },
    { 'name': 'onetoc' },
    { 'name': 'potx' },
    { 'name': 'ppsx' },
    { 'name': 'pptx' },
    { 'name': 'pub' },
    { 'name': 'vsdx' },
    { 'name': 'vssx' },
    { 'name': 'vstx' },
    { 'name': 'xls' },
    { 'name': 'xlsx' },
    { 'name': 'xltx' },
    { 'name': 'xsn' }
];
var DetailsListDocumentsExample = (function (_super) {
    __extends(DetailsListDocumentsExample, _super);
    function DetailsListDocumentsExample(props) {
        var _this = _super.call(this, props) || this;
        //  Populate with items for demos.
        if (_items.length === 0) {
            for (var i = 0; i < 500; i++) {
                var randomDate = _this._randomDate(new Date(2012, 0, 1), new Date());
                var randomFileSize = _this._randomFileSize();
                var randomFileType = _this._randomFileIcon();
                var fileName = example_app_base_1.lorem(2).replace(/\W/g, '');
                var userName = example_app_base_1.lorem(2).replace(/[^a-zA-Z ]/g, '');
                fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1).concat("." + randomFileType.docType);
                userName = userName.split(' ').map(function (name) { return name.charAt(0).toUpperCase() + name.slice(1); }).join(' ');
                _items.push({
                    name: fileName,
                    value: fileName,
                    iconName: randomFileType.url,
                    modifiedBy: userName,
                    dateModified: randomDate.dateFormatted,
                    dateModifiedValue: randomDate.value,
                    fileSize: randomFileSize.value,
                    fileSizeRaw: randomFileSize.rawSize
                });
            }
            _items = _this._sortItems(_items, 'name');
        }
        var _columns = [
            {
                key: 'column1',
                name: 'File Type',
                headerClassName: 'DetailsListExample-header--FileIcon',
                className: 'DetailsListExample-cell--FileIcon',
                iconClassName: 'DetailsListExample-Header-FileTypeIcon',
                iconName: 'Page',
                isIconOnly: true,
                fieldName: 'name',
                minWidth: 16,
                maxWidth: 16,
                onRender: function (item) {
                    return src = { item: .iconName };
                    className = { 'DetailsListExample-documentIconImage':  }
                        /  >
                    ;
                }
            }
        ];
        ;
        return _this;
    }
    return DetailsListDocumentsExample;
}(React.Component));
exports.DetailsListDocumentsExample = DetailsListDocumentsExample;
{
    key: 'column2',
        name;
    'Name',
        fieldName;
    'name',
        minWidth;
    210,
        maxWidth;
    350,
        isRowHeader;
    true,
        isResizable;
    true,
        isSorted;
    true,
        isSortedDescending;
    false,
        onColumnClick;
    this._onColumnClick,
        data;
    'string',
        isPadded;
    true;
}
{
    key: 'column3',
        name;
    'Date Modified',
        fieldName;
    'dateModifiedValue',
        minWidth;
    70,
        maxWidth;
    90,
        isResizable;
    true,
        onColumnClick;
    this._onColumnClick,
        data;
    'number',
        onRender;
    (function (item) {
        return (data - is - focusable) = { true:  }
            >
                { item: .dateModified }
            < /span>;
        ;
    },
        isPadded);
    true;
}
{
    key: 'column4',
        name;
    'Modified By',
        fieldName;
    'modifiedBy',
        minWidth;
    70,
        maxWidth;
    90,
        isResizable;
    true,
        data;
    'string',
        onColumnClick;
    this._onColumnClick,
        onRender;
    (function (item) {
        return (data - is - focusable) = { true:  }
            >
                { item: .modifiedBy }
            < /span>;
        ;
    },
        isPadded);
    true;
}
{
    key: 'column5',
        name;
    'File Size',
        fieldName;
    'fileSizeRaw',
        minWidth;
    70,
        maxWidth;
    90,
        isResizable;
    true,
        data;
    'number',
        onColumnClick;
    this._onColumnClick,
        onRender;
    (function (item) {
        return (data - is - focusable) = { true:  }
            >
                { item: .fileSize }
            < /span>;
        ;
    });
}
;
this._selection = new DetailsList_1.Selection({
    onSelectionChanged: function () { return _this.setState({ selectionDetails: _this._getSelectionDetails() }); }
});
this.state = {
    items: _items,
    columns: _columns,
    selectionDetails: this._getSelectionDetails(),
    isCompactMode: false
};
render();
{
    var _a = this.state, columns = _a.columns, isCompactMode = _a.isCompactMode, items = _a.items, selectionDetails = _a.selectionDetails;
    return label = 'Enable Compact Mode';
    checked = { isCompactMode: isCompactMode };
    onChanged = { this: ._onChangeToggle };
    onText = 'Compact';
    offText = 'Normal'
        /  >
        { selectionDetails: selectionDetails } < /div>
        < TextField_1.TextField;
    label = 'Filter by name:';
    onChanged = { this: ._onChangeText }
        /  >
        selection;
    {
        this._selection;
    }
     >
        items;
    {
        items;
    }
    compact = { isCompactMode: isCompactMode };
    columns = { columns: columns };
    setKey = 'set';
    layoutMode = { DetailsListLayoutMode: .justified };
    isHeaderVisible = { true:  };
    selection = { this: ._selection };
    selectionPreservedOnEmptyClick = { true:  };
    onItemInvoked = { this: ._onItemInvoked }
        /  >
        /MarqueeSelection>
        < /div>;
    ;
}
_onChangeToggle(checked, boolean);
void {
    this: .setState({ isCompactMode: checked })
};
_onChangeText(text, any);
void {
    this: .setState({ items: text ? _items.filter(function (i) { return i.name.toLowerCase().indexOf(text) > -1; }) : _items })
};
_onItemInvoked(item, any);
void (_b = ["Item invoked: ", ""], _b.raw = ["Item invoked: ", ""], {
    alert: function () { }
}(_b, item.name));
;
_randomDate(start, Date, end, Date);
{
    value: number;
    dateFormatted: string;
}
{
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    var dateData = {
        value: date.valueOf(),
        dateFormatted: date.toLocaleDateString()
    };
    return dateData;
}
_randomFileIcon();
{
    docType: string;
    url: string;
}
{
    var docType = fileIcons[Math.floor(Math.random() * fileIcons.length) + 0].name;
    return {
        docType: docType,
        url: "https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/" + docType + "_16x1.svg"
    };
}
_randomFileSize();
{
    value: string;
    rawSize: number;
}
{
    var fileSize = Math.floor(Math.random() * 100) + 30;
    return {
        value: fileSize + " KB",
        rawSize: fileSize
    };
}
_getSelectionDetails();
string;
{
    var selectionCount = this._selection.getSelectedCount();
    switch (selectionCount) {
        case 0:
            return 'No items selected';
        case 1:
            return '1 item selected: ' + this._selection.getSelection()[0].name;
        default:
            return selectionCount + " items selected";
    }
}
_onColumnClick(ev, React.MouseEvent < HTMLElement > , column, IColumn);
{
    var _c = this.state, columns = _c.columns, items = _c.items;
    var newItems = items.slice();
    var newColumns = columns.slice();
    var currColumn_1 = newColumns.filter(function (currCol, idx) {
        return column.key === currCol.key;
    })[0];
    newColumns.forEach(function (newCol) {
        if (newCol === currColumn_1) {
            currColumn_1.isSortedDescending = !currColumn_1.isSortedDescending;
            currColumn_1.isSorted = true;
        }
        else {
            newCol.isSorted = false;
            newCol.isSortedDescending = true;
        }
    });
    newItems = this._sortItems(newItems, currColumn_1.fieldName, currColumn_1.isSortedDescending);
    this.setState({
        columns: newColumns,
        items: newItems
    });
}
_sortItems(items, IDocument[], sortBy, string, descending = false);
IDocument[];
{
    if (descending) {
        return items.sort(function (a, b) {
            if (a[sortBy] < b[sortBy]) {
                return 1;
            }
            if (a[sortBy] > b[sortBy]) {
                return -1;
            }
            return 0;
        });
    }
    else {
        return items.sort(function (a, b) {
            if (a[sortBy] < b[sortBy]) {
                return -1;
            }
            if (a[sortBy] > b[sortBy]) {
                return 1;
            }
            return 0;
        });
    }
}
var _b;

//# sourceMappingURL=1.js.map
