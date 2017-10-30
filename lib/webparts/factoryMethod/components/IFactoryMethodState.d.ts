import { IListItem } from "./models/IListItem";
import { INewsListItem } from "./models/INewsListItem";
import { IDirectoryListItem } from "./models/IDirectoryListItem";
import { IAnnouncementListItem } from "./models/IAnnouncementListItem";
import { IColumn } from "office-ui-fabric-react/lib/DetailsList";
export declare class IFactoryMethodState {
    type: string;
    status: string;
    columns: IColumn[];
    DetailsListItemState: IDetailsListItemState;
    DetailsNewsListItemState: IDetailsNewsListItemState;
    DetailsDirectoryListItemState: IDetailsDirectoryListItemState;
    DetailsAnnouncementListItemState: IDetailsAnnouncementListItemState;
}
export declare class IDetailsListItemState {
    items: IListItem[];
}
export interface IDetailsNewsListItemState {
    items: INewsListItem[];
}
export interface IDetailsDirectoryListItemState {
    items: IDirectoryListItem[];
}
export interface IDetailsAnnouncementListItemState {
    items: IAnnouncementListItem[];
}
