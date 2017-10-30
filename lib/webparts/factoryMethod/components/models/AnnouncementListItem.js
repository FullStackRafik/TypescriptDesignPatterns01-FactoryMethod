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
var ListItem_1 = require("./ListItem");
var AnnouncementListItem = (function (_super) {
    __extends(AnnouncementListItem, _super);
    function AnnouncementListItem(id, title, modified, created, modifiedby, createdby, announcementBody, expiryDate) {
        var _this = _super.call(this, id, title, modified, created, modifiedby, createdby) || this;
        _this.id = id;
        _this.title = title;
        _this.modified = modified;
        _this.created = created;
        _this.modifiedby = modifiedby;
        _this.createdby = createdby;
        _this.announcementBody = announcementBody;
        _this.expiryDate = expiryDate;
        return _this;
    }
    return AnnouncementListItem;
}(ListItem_1.ListItem));
exports.AnnouncementListItem = AnnouncementListItem;

//# sourceMappingURL=AnnouncementListItem.js.map
