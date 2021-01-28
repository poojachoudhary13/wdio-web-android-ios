const appPackage = browser.capabilities.appPackage;

export const OnboardingScreenSelectorsADR = {
    signInBtn: `android=new UiSelector().resourceId("${appPackage}:id/signInTv")`,
    browseBtn: `android=new UiSelector().resourceId("${appPackage}:id/seeRestaurantsTv")`,
    signUpBtn: `android=new UiSelector().resourceId("${appPackage}:id/createAccountTextViewClick")`,
    logoImg: `android=new UiSelector().resourceId("${appPackage}:id/splashLogoImageView")`,
};

//`android=new UiSelector().resourceId("${appPackage}:id/smallLabel").text("Search")`