export const environment = {
    production: false,
    apiBaseUrl: "https://qbotdemotesting.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "05b53c7e-01b4-48de-9646-4506aaf5bfaf",
        clientId: "92cd5cbb-3a31-400c-91ae-9b6d17008403",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
