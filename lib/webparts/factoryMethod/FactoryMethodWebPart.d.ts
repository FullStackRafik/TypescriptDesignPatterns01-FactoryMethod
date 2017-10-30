import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";
import { IFactoryMethodWebPartProps } from "./IFactoryMethodWebPartProps";
export default class FactoryMethodWebPart extends BaseClientSideWebPart<IFactoryMethodWebPartProps> {
    private _dropdownOptions;
    private _selectedList;
    private _disableDropdown;
    private _dataProvider;
    private _factorymethodContainerComponent;
    protected onInit(): Promise<void>;
    render(): void;
    private loadLists();
    protected readonly dataVersion: Version;
    protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void;
    private setSelectedList(value);
    private getGroupFields();
    private openPropertyPane();
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
