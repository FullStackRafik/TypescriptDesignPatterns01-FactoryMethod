import { ListItem } from './ListItem';
export declare class DirectoryListItem extends ListItem {
    id: string;
    title: string;
    modified: Date;
    created: Date;
    modifiedby: string;
    createdby: string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    internalNumber: string;
    constructor(id: string, title: string, modified: Date, created: Date, modifiedby: string, createdby: string, firstName: string, lastName: string, mobileNumber: string, internalNumber: string);
}
