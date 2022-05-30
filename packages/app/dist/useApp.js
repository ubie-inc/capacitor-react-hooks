import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { notAvailable } from './util/models';
import { isFeatureAvailable } from './util/feature-check';
import { useEffect, useState } from 'react';
export const availableFeatures = {
    appState: isFeatureAvailable('App', 'state'),
    getLaunchUrl: isFeatureAvailable('App', 'getLaunchUrl'),
    appUrlOpen: isFeatureAvailable('App', 'appUrlOpen'),
};
if (!Capacitor.isPluginAvailable('App')) {
    console.warn('The @capacitor/app plugin was not found, did you forget to install it?');
}
export function useAppState() {
    if (!availableFeatures.appState) {
        return notAvailable;
    }
    const [state, setAppState] = useState(true);
    useEffect(() => {
        const listener = App.addListener('appStateChange', async (state) => {
            setAppState(state.isActive);
        });
        return () => {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            listener && listener.remove && listener.remove().catch(() => { });
        };
    }, [App, setAppState]);
    return {
        state,
        isAvailable: true,
    };
}
/**
 * Get the URL the app was originally launched with. Note: if
 * you want to detect future app opens, use `useAppUrlOpen` instead,
 * which will stay updated.
 */
export function useLaunchUrl() {
    if (!availableFeatures.getLaunchUrl) {
        return notAvailable;
    }
    const [launchUrl, setUrl] = useState();
    useEffect(() => {
        async function getAppLaunchUrl() {
            const ret = await App.getLaunchUrl();
            setUrl(ret === null || ret === void 0 ? void 0 : ret.url);
        }
        getAppLaunchUrl();
    }, [App, setUrl]);
    return {
        launchUrl,
        isAvailable: true,
    };
}
export function useAppUrlOpen() {
    if (!isFeatureAvailable('App', 'appUrlOpen')) {
        return notAvailable;
    }
    const [appUrlOpen, setAppUrl] = useState();
    useEffect(() => {
        const listener = App.addListener('appUrlOpen', async (state) => {
            setAppUrl(state.url);
        });
        return () => {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            listener && listener.remove && listener.remove().catch(() => { });
        };
    }, [App, setAppUrl]);
    return {
        appUrlOpen,
        isAvailable: true,
    };
}
//# sourceMappingURL=useApp.js.map