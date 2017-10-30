import { IListItem } from "./models/IListItem";
import { SPHttpClient } from "@microsoft/sp-http";
export interface IFactory {
    getItems(requester: SPHttpClient, siteUrl: string, listName: string): Promise<IListItem[]>;
}
