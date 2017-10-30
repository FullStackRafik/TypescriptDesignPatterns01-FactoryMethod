import { SPHttpClient } from '@microsoft/sp-http';
import { ListItemFactory } from './ListItemFactory';
import { IAnnouncementListItem } from './models/IAnnouncementListItem';
export declare class AnnouncementListItemFactory extends ListItemFactory {
    _getItems(requester: SPHttpClient, siteUrl: string, listName: string): IAnnouncementListItem[];
}
