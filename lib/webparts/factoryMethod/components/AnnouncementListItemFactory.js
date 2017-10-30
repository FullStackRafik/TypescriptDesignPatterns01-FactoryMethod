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
var sp_http_1 = require("@microsoft/sp-http");
var ListItemFactory_1 = require("./ListItemFactory");
var AnnouncementListItemFactory = (function (_super) {
    __extends(AnnouncementListItemFactory, _super);
    function AnnouncementListItemFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnouncementListItemFactory.prototype._getItems = function (requester, siteUrl, listName) {
        var items;
        requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id", sp_http_1.SPHttpClient.configurations.v1, {
            headers: {
                'Accept': 'application/json;odata=nometadata',
                'odata-version': ''
            }
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (response) {
            items = response.value;
        });
        return items;
    };
    return AnnouncementListItemFactory;
}(ListItemFactory_1.ListItemFactory));
exports.AnnouncementListItemFactory = AnnouncementListItemFactory;

//# sourceMappingURL=AnnouncementListItemFactory.js.map
