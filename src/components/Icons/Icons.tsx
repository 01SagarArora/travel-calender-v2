import SvgIcons from "./SvgIcons";

export type IconSize = 'medium' | 'small' | 'large' | 'inherit';
export enum ICON {
    DOCUMENT ='DOCUMENT',
    TRAVELLER = 'TRAVELLER'
}
export function Icon(props: { name: any, color?: string, size?: IconSize}) {
    function getProductIcon() {
        switch (props.name) {

            case ICON.DOCUMENT:
                    return <SvgIcons.document_icon />;
            case ICON.TRAVELLER:
                return <SvgIcons.traveller_icon/>
            default:
                return <></>
        }
    }

    return getProductIcon();
}