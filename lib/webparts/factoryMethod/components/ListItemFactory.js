"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_http_1 = require("@microsoft/sp-http");
var ListItemFactory = (function () {
    function ListItemFactory() {
    }
    ListItemFactory.prototype.getItems = function (requester, siteUrl, listName) {
        if (listName === "") {
            listName = "GenericList";
        }
        switch (listName) {
            case "GenericList":
                var items_1;
                // tslint:disable-next-line:max-line-length
                return requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id,Modified,Created,Author/Title,Editor/Title&$expand=Author,Editor", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    console.log(JSON.stringify(json.value));
                    return items_1 = json.value.map(function (v, i) { return ({
                        //key: v.id,
                        id: v.Id,
                        title: v.Title,
                        created: v.Created,
                        createdby: v.Author.Title,
                        modified: v.Modified,
                        modifiedby: v.Editor.Title
                    }); });
                });
            case "News":
                var newsitems = void 0;
                // tslint:disable-next-line:max-line-length
                return requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id,Modified,Created,Created By,Modified By,newsheader,newsbody,expiryDate", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    return items_1 = json.value.map(function (v, i) { return ({
                        id: v.Id,
                        title: v.Title,
                        created: v.Created,
                        createdby: v.Author.Title,
                        modified: v.Modified,
                        modifiedby: v.Editor.Title,
                        newsheader: v.newsheader,
                        newsbody: v.newsbody,
                        expiryDate: v.expiryDate
                    }); });
                });
            case "Announcements":
                var announcementitems = void 0;
                return requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    return items_1 = json.value.map(function (v, i) { return ({
                        id: v.Id,
                        title: v.Title,
                        created: v.Created,
                        createdby: v.Author.Title,
                        modified: v.Modified,
                        modifiedby: v.Editor.Title,
                        announcementBody: v.announcementBody,
                        expiryDate: v.expiryDate
                    }); });
                });
            case "Directory":
                var directoryitems = void 0;
                return requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    return items_1 = json.value.map(function (v, i) { return ({
                        id: v.Id,
                        title: v.Title,
                        created: v.Created,
                        createdby: v.Author.Title,
                        modified: v.Modified,
                        modifiedby: v.Editor.Title,
                        firstName: v.firstName,
                        lastName: v.lastName,
                        mobileNumber: v.mobileNumber,
                        internalNumber: v.internalNumber
                    }); });
                });
            default:
                // tslint:disable-next-line:max-line-length
                return requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id,Modified,Created,Author/Title,Editor/Title&$expand=Author,Editor", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    console.log(JSON.stringify(json.value));
                    return items_1 = json.value.map(function (v, i) { return ({
                        //key: v.id,
                        id: v.Id,
                        title: v.Title,
                        created: v.Created,
                        createdby: v.Author.Title,
                        modified: v.Modified,
                        modifiedby: v.Editor.Title
                    }); });
                });
        }
    };
    return ListItemFactory;
}());
exports.ListItemFactory = ListItemFactory;

//# sourceMappingURL=ListItemFactory.js.map
