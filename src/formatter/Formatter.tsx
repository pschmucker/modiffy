export interface Formatter {
    matches: (value: any) => boolean;
    format: (value: any) => JSX.Element;
}
