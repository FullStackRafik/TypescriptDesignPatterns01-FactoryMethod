import { SPHttpClient } from "@microsoft/sp-http";
import { IFactory } from "./IFactory";
export declare class ListItemFactory implements IFactory {
    getItems(requester: SPHttpClient, siteUrl: string, listName: string): Promise<any[]>;
}
