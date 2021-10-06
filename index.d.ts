/** This function is for use with firebase timestamps, pass in the timestamp and then if time is desired pass the truthy returnTime parameter. */
export declare const formatDate: (timestamp: number, returnTime?: boolean | undefined) => string;
export declare const isEmptyObject: (obj: object) => Boolean;
export declare const copyTextToClipboard: (textToCopy: string) => Promise<void>;
