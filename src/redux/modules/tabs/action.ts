import * as types from "@/redux/mutation-types";
import { Menu as MenuNamespace } from "@/typings/global";

// * setTabsList
export const setTabsList = (tabsList: MenuNamespace.MenuOptions[]) => ({
	type: types.SET_TABS_LIST,
	tabsList
});

// * setTabsActive
export const setTabsActive = (tabsActive: string) => ({
	type: types.SET_TABS_ACTIVE,
	tabsActive
});
