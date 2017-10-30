import { IWebPartContext } from '@microsoft/sp-webpart-base';
import List from '../models/List';
import IDataProvider from './IDataProvider';
export default class SharePointDataProvider implements IDataProvider {
    private _selectedList;
    private _lists;
    private _listsUrl;
    private _listItemsUrl;
    private _webPartContext;
    selectedList: List;
    webPartContext: IWebPartContext;
    getLists(): Promise<List[]>;
}
