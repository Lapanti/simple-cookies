import cookies, { CookieError, priv } from '../cookies';
const { checkCookieSupport } = priv as any;

test('Cookies', () => {
    describe('get', () => {
        it('should return the correct value', () => {
            document.cookie = 'test=value;path=/';
            expect(cookies.get('test')).toEqual('value');
        });

        it('should return null when searching for nonexisting cookies', () =>
            expect(cookies.get('nonexistent')).toEqual(''));
    });

    describe('set', () => {
        it('should succeed in setting a new cookie', () => {
            expect(cookies.set('test', 'value')).toBeTruthy();
            expect(cookies.get('test')).toEqual('value');
        });
    });

    describe('remove', () => {
        it('should return true on successful removal', () => {
            document.cookie = 'test=value';
            expect(cookies.remove('test')).toBeTruthy();
            expect(cookies.get('test')).toEqual('');
        });
    });

    describe('checkCookieSupport', () => {
        expect(checkCookieSupport()).toBeTruthy();
    });
});

/**
 * @jest-environment node
 */
test('Cookies in server', () => {
    describe('get', () => {
        it('should throw an error when document is not defined', () => {
            expect(() => cookies.get('doesntmatter')).toThrow(
                'Document is not defined! Are you trying to use this on the server?',
            );
            expect(() => cookies.get('doesntmatter')).toThrowError(CookieError);
        });

        it('should return null if silent is enabled and document is not defined', () => {
            expect(() => cookies.get('doesntmatter', { silent: true })).not.toThrow();
            expect(cookies.get('doesntmatter', { silent: true })).toEqual('');
        });
    });

    describe('set', () => {
        it('should throw an error when document is not defined', () => {
            expect(() => cookies.set('doesntmatter', '0')).toThrow(
                'Document is not defined! Are you trying to use this on the server?',
            );
            expect(() => cookies.set('doesntmatter', '0')).toThrowError(CookieError);
        });

        it('should return false if silent is enabled and document is not defined', () => {
            expect(() => cookies.set('doesntmatter', '0', { silent: true })).not.toThrow();
            expect(cookies.set('doesntmatter', '0', { silent: true })).toBeFalsy();
        });
    });

    describe('remove', () => {
        it('should throw an error when document is not defined', () => {
            expect(() => cookies.remove('doesntmatter')).toThrow(
                'Document is not defined! Are you trying to use this on the server?',
            );
            expect(() => cookies.remove('doesntmatter')).toThrowError(CookieError);
        });

        it('should return false if silent is enabled and document is not defined', () => {
            expect(() => cookies.remove('doesntmatter', { silent: true })).not.toThrow();
            expect(cookies.remove('doesntmatter', { silent: true })).toBeFalsy();
        });
    });

    describe('checkCookieSupport', () => {
        it('should throw error if not silent and document is undefined', () => {
            expect(() => checkCookieSupport()).toThrow(
                'Document is not defined! Are you trying to use this on the server?',
            );
            expect(checkCookieSupport()).toThrow(CookieError);
        });

        it('should return false if silent is enabled', () => {
            expect(checkCookieSupport({ silent: true })).toBeFalsy();
        });
    });
});
