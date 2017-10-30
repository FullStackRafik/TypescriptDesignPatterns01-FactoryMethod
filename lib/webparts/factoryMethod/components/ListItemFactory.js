"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_http_1 = require("@microsoft/sp-http");
var ListItemFactory = (function () {
    function ListItemFactory() {
    }
    ListItemFactory.prototype.getItems = function (requester, siteUrl, listName) {
        var _this = this;
        switch (listName) {
            case "GenericList":
                var items = void 0;
                // tslint:disable-next-line:max-line-length
                requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id,Modified,Created,Created By,Modified By", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    return _this._listItems = json.value;
                });
                break;
            case "News":
                var newsitems = void 0;
                // tslint:disable-next-line:max-line-length
                requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id,Modified,Created,Created By,Modified By,newsheader,newsbody,expiryDate", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    return _this._listItems = json.value;
                });
                break;
            case "Announcements":
                var announcementitems = void 0;
                requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    return _this._listItems = json.value;
                });
                break;
            case "Directory":
                var directoryitems = void 0;
                requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    return _this._listItems = json.value;
                });
                break;
            default:
                return null;
        }
    };
    return ListItemFactory;
}());
exports.ListItemFactory = ListItemFactory;

//# sourceMappingURL=ListItemFactory.js.map
