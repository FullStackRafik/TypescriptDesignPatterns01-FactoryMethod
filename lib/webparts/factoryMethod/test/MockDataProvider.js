"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockDataProvider = (function () {
    function MockDataProvider() {
        this._lists = [
            this._createMockTaskList("1", "Basic List"),
            this._createMockTaskList("2", "Announcements List"),
            this._createMockTaskList("3", "News List"),
            this._createMockTaskList("4", "Directory List"),
        ];
    }
    Object.defineProperty(MockDataProvider.prototype, "webPartContext", {
        get: function () {
            return this._webPartContext;
        },
        // getters and Setters
        set: function (value) {
            this._webPartContext = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockDataProvider.prototype, "selectedList", {
        get: function () {
            return this._selectedList;
        },
        set: function (value) {
            this._selectedList = value;
        },
        enumerable: true,
        configurable: true
    });
    MockDataProvider.prototype.getLists = function () {
        var taskLists = this._lists;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(taskLists); }, 500);
        });
    };
    MockDataProvider.prototype._createMockTaskList = function (id, title) {
        var mockTaskList = {
            Id: id,
            Title: title
        };
        return mockTaskList;
    };
    return MockDataProvider;
}());
exports.default = MockDataProvider;

//# sourceMappingURL=MockDataProvider.js.map
