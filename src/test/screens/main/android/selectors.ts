const appPackage = browser.capabilities.appPackage;

export const MainScreenSelectorsADR = {
    search: `android=new UiSelector().resourceId("${appPackage}:id/smallLabel").text("Search")`,
    deliverTo: `android=new UiSelector().resourceId("${appPackage}:id/deliverToTv")`,
};