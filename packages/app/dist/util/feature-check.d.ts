declare const featureMap: {
    App: {
        state: {
            web: boolean;
            ios: boolean;
            android: boolean;
            electron: boolean;
        };
        getLaunchUrl: {
            web: boolean;
            ios: boolean;
            android: boolean;
            electron: boolean;
        };
        appUrlOpen: {
            web: boolean;
            ios: boolean;
            android: boolean;
            electron: boolean;
        };
    };
};
export declare function isFeatureAvailable<T extends typeof featureMap, PluginKeys extends keyof NonNullable<T>, FeatureKeys extends keyof NonNullable<NonNullable<T>[PluginKeys]>>(plugin: PluginKeys, method: FeatureKeys): boolean;
export declare function featureNotAvailableError(): any;
export {};
