import { Capacitor } from '@capacitor/core';
import { FeatureNotAvailableError } from './models';
const allTrue = {
    web: true,
    ios: true,
    android: true,
    electron: true,
};
const featureMap = {
    App: {
        state: allTrue,
        getLaunchUrl: Object.assign(Object.assign({}, allTrue), { web: false }),
        appUrlOpen: Object.assign(Object.assign({}, allTrue), { web: false }),
    },
};
export function isFeatureAvailable(plugin, method) {
    const isPluginAvailable = Capacitor.isPluginAvailable(plugin);
    const isFeatureSupported = featureMap[plugin][method][Capacitor.getPlatform()];
    if (isPluginAvailable && !!isFeatureSupported) {
        return true;
    }
    return false;
}
export function featureNotAvailableError() {
    throw new FeatureNotAvailableError();
}
//# sourceMappingURL=feature-check.js.map