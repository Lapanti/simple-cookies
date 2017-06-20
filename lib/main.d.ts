export declare class CookieError extends Error {
}
export interface ICookieOptions {
    readonly silent?: boolean;
    readonly days?: number;
    readonly secure?: boolean;
}
declare const cookies: {
    get: (name: string, opts?: ICookieOptions | undefined) => string | null;
    set: (name: string, value: string, opts?: ICookieOptions | undefined) => boolean;
    remove: (name: string, opts?: ICookieOptions | undefined) => boolean;
};
export declare const priv: {
    checkCookieSupport: (opts?: ICookieOptions | undefined) => boolean;
} | null;
export default cookies;
