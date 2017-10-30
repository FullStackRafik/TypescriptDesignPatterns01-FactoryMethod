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
    // get all lists, not only tasks lists
    SharePointDataProvider.prototype.getLists = function () {
        // const listTemplateId: string = '171';
        // const queryString: string = `?$filter=BaseTemplate eq ${listTemplateId}`;
        // const queryUrl: string = this._listsUrl + queryString;
        var _this = this;
        return this._webPartContext.spHttpClient.get(this._listsUrl, sp_http_1.SPHttpClient.configurations.v1)
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

//# sourceMappingURL=SharepointDataProvider.js.map
