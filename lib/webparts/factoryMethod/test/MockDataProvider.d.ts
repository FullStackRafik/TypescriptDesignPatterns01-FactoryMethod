import { IWebPartContext } from "@microsoft/sp-webpart-base";
import IDataProvider from "../components/dataproviders/IDataProvider";
import List from "../components/models/List";
export default class MockDataProvider implements IDataProvider {
    private _lists;
    private _selectedList;
    private _webPartContext;
    constructor();
    webPartContext: IWebPartContext;
    selectedList: List;
    getLists(): Promise<List[]>;
    private _createMockTaskList(id, title);
}
