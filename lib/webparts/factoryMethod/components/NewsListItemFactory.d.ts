import { SPHttpClient } from '@microsoft/sp-http';
import { ListItemFactory } from './ListItemFactory';
import { INewsListItem } from './models/INewsListItem';
export declare class NewsListItemFactory extends ListItemFactory {
    _getItems(requester: SPHttpClient, siteUrl: string, listName: string): INewsListItem[];
}
