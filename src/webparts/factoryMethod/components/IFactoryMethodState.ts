import { IListItem } from "./models/IListItem";
import { INewsListItem } from "./models/INewsListItem";
import { IDirectoryListItem } from "./models/IDirectoryListItem";
import { IAnnouncementListItem } from "./models/IAnnouncementListItem";
import {
  IColumn
} from "office-ui-fabric-react/lib/DetailsList";

export class IFactoryMethodState {
  public type: string;
  public status: string;
  public columns: IColumn[];
  public DetailsListItemState: IDetailsListItemState;
  public DetailsNewsListItemState: IDetailsNewsListItemState;
  public DetailsDirectoryListItemState : IDetailsDirectoryListItemState;
  public DetailsAnnouncementListItemState : IDetailsAnnouncementListItemState;
}

export class IDetailsListItemState {
  public items: IListItem[];
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