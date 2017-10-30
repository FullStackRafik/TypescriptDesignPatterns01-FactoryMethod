import * as React from "react";
import { IFactoryMethodProps } from "./IFactoryMethodProps";
import { IFactoryMethodState } from "./IFactoryMethodState";
export default class FactoryMethod extends React.Component<IFactoryMethodProps, IFactoryMethodState> {
    constructor(props: IFactoryMethodProps, state: any);
    render(): React.ReactElement<IFactoryMethodProps>;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IFactoryMethodProps): void;
    private _configureWebPart();
    setInitialState(): void;
    private ListMarqueeSelection;
    private readItemsAndSetStatus();
    private listNotConfigured(props);
}
