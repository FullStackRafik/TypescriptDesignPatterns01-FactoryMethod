import { SPHttpClient } from "@microsoft/sp-http";
import { IListItem } from "./models/IListItem";
import { IFactory } from "./IFactory";
export declare class ListItemFactory implements IFactory {
    private _listItems;
    getItems(requester: SPHttpClient, siteUrl: string, listName: string): Promise<IListItem[]>;
}
