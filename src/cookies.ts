export class CookieError extends Error {}

const year = 365;
const daysToMillis = 24 * 60 * 60 * 1000; // tslint:disable-line:no-magic-numbers

interface ICookieOptions {
    readonly silent: boolean;
    readonly days?: number;
}

const defaultCookieOpts: ICookieOptions = {
    silent: false,
    days: year,
};

const checkCookieSupport = (opts: ICookieOptions): boolean => {
    if (typeof document === 'undefined' && !opts.silent) {
        throw new CookieError('Document is not defined! Are you trying to use this on the server?');
    }
    return typeof document !== 'undefined';
};

const write = (name: string, value: string, opts: ICookieOptions = defaultCookieOpts): boolean => {
    if (checkCookieSupport(opts)) {
        const date = new Date();
        const expires = !!opts.days ? `; expires=${date.setTime(date.getTime() + opts.days * daysToMillis)}` : '';
        document.cookie = `${encodeURIComponent(name)}=${value}${expires}`;
        return true;
    }
    return false;
};

const cookies = {
    get: (name: string, opts: ICookieOptions = defaultCookieOpts): string | null => {
        if (checkCookieSupport(opts)) {
            const res = document.cookie.match(`(?:^|; )${encodeURIComponent(name)}=([^;]*)`);
            return res ? res[1] : '';
        }
        return '';
    },
    set: write,
    remove: (name: string, opts: ICookieOptions = defaultCookieOpts): boolean =>
        write(name, '', Object.assign({ days: -1 }, opts)),
};

export default cookies;
