import { ListItem } from './ListItem';
export declare class NewsListItem extends ListItem {
    id: string;
    title: string;
    modified: Date;
    created: Date;
    modifiedby: string;
    createdby: string;
    newsheader: string;
    newsbody: string;
    expiryDate: Date;
    constructor(id: string, title: string, modified: Date, created: Date, modifiedby: string, createdby: string, newsheader: string, newsbody: string, expiryDate: Date);
}
