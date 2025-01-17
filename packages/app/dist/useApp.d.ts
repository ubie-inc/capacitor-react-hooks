import { AvailableResult } from './util/models';
interface AppUrlOpenResult extends AvailableResult {
    appUrlOpen?: string;
}
interface AppStateResult extends AvailableResult {
    state?: boolean;
}
interface LaunchUrlResult extends AvailableResult {
    launchUrl?: string;
}
export declare const availableFeatures: {
    appState: boolean;
    getLaunchUrl: boolean;
    appUrlOpen: boolean;
};
export declare function useAppState(): AppStateResult;
/**
 * Get the URL the app was originally launched with. Note: if
 * you want to detect future app opens, use `useAppUrlOpen` instead,
 * which will stay updated.
 */
export declare function useLaunchUrl(): LaunchUrlResult;
export declare function useAppUrlOpen(): AppUrlOpenResult;
export {};
