//#region Imports
import * as React from "react";
import styles from "./FactoryMethod.module.scss";
import  { IFactoryMethodProps } from "./IFactoryMethodProps";
import {
  IDetailsListItemState,
  IDetailsNewsListItemState,
  IDetailsDirectoryListItemState,
  IDetailsAnnouncementListItemState,
  IFactoryMethodState
} from "./IFactoryMethodState";
import { IListItem } from "./models/IListItem";
import { IAnnouncementListItem } from "./models/IAnnouncementListItem";
import { INewsListItem } from "./models/INewsListItem";
import { IDirectoryListItem } from "./models/IDirectoryListItem";
import { escape } from "@microsoft/sp-lodash-subset";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { ListItemFactory} from "./ListItemFactory";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  buildColumns,
  IColumn
} from "office-ui-fabric-react/lib/DetailsList";
import { MarqueeSelection } from "office-ui-fabric-react/lib/MarqueeSelection";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import PropTypes from "prop-types";
//#endregion


export default class FactoryMethod extends React.Component<IFactoryMethodProps, IFactoryMethodState> {
  constructor(props: IFactoryMethodProps, state: any) {
    super(props);
    this.setInitialState();
  }

  // lifecycle help here: https://staminaloops.github.io/undefinedisnotafunction/understanding-react/

  //#region Mouting events lifecycle

  // the data returned from render is neither a string nor a DOM node.
  // it's a lightweight description of what the DOM should look like.
  // inspects this.state and this.props and create the markup.
  // when your data changes, the render method is called again.
  // react diff the return value from the previous call to render with
  // the new one, and generate a minimal set of changes to be applied to the DOM.
  public render(): React.ReactElement<IFactoryMethodProps> {
    switch(this.props.listName) {
        case "GenericList":
          // tslint:disable-next-line:max-line-length
          return <this.ListMarqueeSelection items={this.state.DetailsListItemState.items} columns={this.state.columns} />;
        case "News":
          // tslint:disable-next-line:max-line-length
          return <this.ListMarqueeSelection items={this.state.DetailsNewsListItemState.items} columns={this.state.columns}/>;
        case "Announcements":
          // tslint:disable-next-line:max-line-length
          return <this.ListMarqueeSelection items={this.state.DetailsAnnouncementListItemState.items} columns={this.state.columns}/>;
        case "Directory":
          // tslint:disable-next-line:max-line-length
          return <this.ListMarqueeSelection items={this.state.DetailsDirectoryListItemState.items} columns={this.state.columns}/>;
        default:
          return null;
    }
  }

   // invoked once, only on the client (not on the server), immediately AFTER the initial rendering occurs.
   public componentDidMount(): void {
    // you can access any refs to your children
    // (e.g., to access the underlying DOM representation - ReactDOM.findDOMNode).
    // the componentDidMount() method of child components is invoked before that of parent components.
    // if you want to integrate with other JavaScript frameworks,
    // set timers using setTimeout or setInterval,
    // or send AJAX requests, perform those operations in this method.
    this._configureWebPart = this._configureWebPart.bind(this);
    this.readItemsAndSetStatus("");
  }

  //#endregion

  //#region Props changes lifecycle events (after a property changes from parent component)
  public componentWillReceiveProps(nextProps: IFactoryMethodProps): void {
    if(nextProps.listName !== this.props.listName) {
      this.readItemsAndSetStatus(nextProps.listName);
    }
  }

  //#endregion

  //#region private methods
  private _configureWebPart(): void {
    this.props.configureStartCallback();
  }

  public setInitialState(): void {
    this.state = {
      type: "ListItem",
      status: this.listNotConfigured(this.props)
        ? "Please configure list in Web Part properties"
        : "Ready",
      columns:[],
      DetailsListItemState:{
        items:[]
      },
      DetailsNewsListItemState:{
        items:[]
      },
      DetailsDirectoryListItemState:{
        items:[]
      },
      DetailsAnnouncementListItemState:{
        items:[]
      },
    };
  }

  // reusable inline component
  private ListMarqueeSelection = (itemState: {columns: IColumn[], items: IListItem[] }) => (
      <div>
          <DetailsList
            items={ itemState.items }
            columns={ itemState.columns }
            setKey="set"
            layoutMode={ DetailsListLayoutMode.fixedColumns }
            selectionPreservedOnEmptyClick={ true }
            compact={ true }>
          </DetailsList>
      </div>
  )

  // read items using factory method pattern and sets state accordingly
  private readItemsAndSetStatus(nextListName: string): void {
    this.setState({
      status: "Loading all items..."
    });

    const factory: ListItemFactory = new ListItemFactory();
    factory.getItems(this.props.spHttpClient, this.props.siteUrl, nextListName)
    .then((items: any[]) => {
      const keyPart: string = this.props.listName === "GenericList" ? "" : nextListName;
        // the explicit specification of the type argument `keyof {}` is bad and
        // it should not be required.
        this.setState<keyof {}>({
          status: `Successfully loaded ${items.length} items`,
          ["Details" + keyPart + "ListItemState"] : {
            items
          },
          columns: buildColumns(items)
        });
    });
  }

  private listNotConfigured(props: IFactoryMethodProps): boolean {
    return props.listName === undefined ||
      props.listName === null ||
      props.listName.length === 0;
  }

  //#endregion
}
