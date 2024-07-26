export interface CustomDrawerInterface {
    handleBackDrop: Function,
    title?: string,
    titleIcon?: JSX.Element,
    children: JSX.Element | JSX.Element[],
    zIndex?: number,
    minWidth?: string,
    isOpen?: boolean;
    padding?: string;
    width?: string;
}