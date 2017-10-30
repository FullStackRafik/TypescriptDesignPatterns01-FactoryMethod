import { SPHttpClient } from '@microsoft/sp-http';
import { ListItemFactory } from './ListItemFactory';
import { IDirectoryListItem } from './models/IDirectoryListItem';
export declare class DirectoryListItemFactory extends ListItemFactory {
    _getItems(requester: SPHttpClient, siteUrl: string, listName: string): IDirectoryListItem[];
}
