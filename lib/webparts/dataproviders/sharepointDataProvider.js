"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_http_1 = require("@microsoft/sp-http");
var SharePointDataProvider = (function () {
    function SharePointDataProvider() {
    }
    Object.defineProperty(SharePointDataProvider.prototype, "selectedList", {
        get: function () {
            return this._selectedList;
        },
        set: function (value) {
            this._selectedList = value;
            this._listItemsUrl = this._listsUrl + "(guid'" + value.Id + "')/items";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharePointDataProvider.prototype, "webPartContext", {
        get: function () {
            return this._webPartContext;
        },
        set: function (value) {
            this._webPartContext = value;
            this._listsUrl = this._webPartContext.pageContext.web.absoluteUrl + "/_api/web/lists";
        },
        enumerable: true,
        configurable: true
    });
    SharePointDataProvider.prototype.getLists = function () {
        var _this = this;
        var listTemplateId = '171';
        var queryString = "?$filter=BaseTemplate eq " + listTemplateId;
        var queryUrl = this._listsUrl + queryString;
        return this._webPartContext.spHttpClient.get(queryUrl, sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            return _this._lists = json.value;
        });
    };
    return SharePointDataProvider;
}());
exports.default = SharePointDataProvider;

//# sourceMappingURL=sharepointDataProvider.js.map
