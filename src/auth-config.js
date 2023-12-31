import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: 'c60bdcfb-596b-4357-a8cc-f6cdb4bdab61',
        authority: 'https://login.microsoftonline.com/1d65352a-d4d9-4f79-9876-820aed1738ff',
        redirectUrl: '/',
        postLogoutRedirectUrl: '/',
        navigateToLoginRequestUrl: false,
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateinCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

export const loginRequest = {
    scopes: ['user.read'],
};