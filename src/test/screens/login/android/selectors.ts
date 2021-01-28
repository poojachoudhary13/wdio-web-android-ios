const appPackage = "com.android.chrome";
import { testData } from "../../../test-data/app"

export const loginScreenSelectors = {
    mobileNoEditText: "//input[@id=\"mobileNumber\"]",
    signInBtn: "//*[@id=\"login-btn\"]",
    countryCode: '.selected-dial-code',
    countryCodeInListView: `.dial-code=${testData.countryCode}`,
    ccInBtn: "//*[@text=\"+20\"]",
    facebook: ".fb-container"

};

//`android=new UiSelector().resourceId("${appPackage}:id/smallLabel").text("Search")`