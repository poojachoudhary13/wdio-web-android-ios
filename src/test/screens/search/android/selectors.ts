const appPackage = browser.capabilities.appPackage;
import { testData } from "../../../test-data/app"

export const SearchScreenSelectorsADR = {
    searchEditText: `android=new UiSelector().resourceId("${appPackage}:id/searchEt")`,
    restaurantName: `android=new UiSelector().resourceId("${appPackage}:id/restaurantNameTv").text("${testData.restaurantName}")`,

};


//cart
"com.roundmenu:id/countTs" // in cart  //android.widget.TextView
"com.roundmenu:id/imageView_plus"
"com.roundmenu:id/imageView_minus"
//"new UiSelector().text("placeholder")"