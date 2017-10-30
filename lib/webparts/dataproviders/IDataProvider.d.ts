import { IWebPartContext } from '@microsoft/sp-webpart-base';
import List from '../models/List';
interface IDataProvider {
    selectedList: List;
    webPartContext: IWebPartContext;
    getLists(): Promise<List[]>;
}
export default IDataProvider;
