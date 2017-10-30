import { ListItem } from './ListItem';
export declare class AnnouncementListItem extends ListItem {
    id: string;
    title: string;
    modified: Date;
    created: Date;
    modifiedby: string;
    createdby: string;
    announcementBody: string;
    expiryDate: Date;
    constructor(id: string, title: string, modified: Date, created: Date, modifiedby: string, createdby: string, announcementBody: string, expiryDate: Date);
}
