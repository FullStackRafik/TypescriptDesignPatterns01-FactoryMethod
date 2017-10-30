import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { IListItem} from "./models/IListItem";
import { IFactory } from "./IFactory";
import { INewsListItem } from "./models/INewsListItem";
import { IDirectoryListItem } from "./models/IDirectoryListItem";
import { IAnnouncementListItem } from "./models/IAnnouncementListItem";

export class ListItemFactory implements IFactory {
    private _listItems: IListItem[];
    public getItems(requester: SPHttpClient, siteUrl: string, listName: string): Promise<IListItem[]> {
        switch(listName) {
            case "GenericList":
                let items: IListItem[];
                // tslint:disable-next-line:max-line-length
                requester.get(`${siteUrl}/_api/web/lists/getbytitle('${listName}')/items?$select=Title,Id,Modified,Created,Created By,Modified By`,
                SPHttpClient.configurations.v1,
                {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                .then((response: SPHttpClientResponse): Promise<{ value: IListItem[] }> => {
                    return response.json();
                })
                .then((json: { value: IListItem[] }) => {
                    return this._listItems = json.value;
                  });
                break;    
            case "News":
                let newsitems: INewsListItem[];
                // tslint:disable-next-line:max-line-length
                requester.get(`${siteUrl}/_api/web/lists/getbytitle('${listName}')/items?$select=Title,Id,Modified,Created,Created By,Modified By,newsheader,newsbody,expiryDate`,
                SPHttpClient.configurations.v1,
                {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                .then((response: SPHttpClientResponse): Promise<{ value: INewsListItem[] }> => {
                    return response.json();
                })
                .then((json: { value: INewsListItem[] }) => {
                    return this._listItems = json.value;
                });
                break;    
            case "Announcements":
                let announcementitems: IAnnouncementListItem[];
                requester.get(`${siteUrl}/_api/web/lists/getbytitle('${listName}')/items?$select=Title,Id`,
                SPHttpClient.configurations.v1,
                {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                .then((response: SPHttpClientResponse): Promise<{ value: IAnnouncementListItem[] }> => {
                    return response.json();
                })
                .then((json: { value: IAnnouncementListItem[] }) => {
                    return this._listItems = json.value;
                });
                break;    
            case "Directory":
                let directoryitems: IDirectoryListItem[];
                requester.get(`${siteUrl}/_api/web/lists/getbytitle('${listName}')/items?$select=Title,Id`,
                SPHttpClient.configurations.v1,
                {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                .then((response: SPHttpClientResponse): Promise<{ value: IDirectoryListItem[] }> => {
                    return response.json();
                })
                .then((json: { value: IDirectoryListItem[] }) => {
                    return this._listItems = json.value;
                });
                break;    
            default:
                return null;
        }
      }
}
