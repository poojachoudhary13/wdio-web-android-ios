const appPackage = browser.capabilities.appPackage;
import { testData } from "../../../test-data/app"

export const restrauntScreenSelectors = {
    itemText: `android=new UiSelector().resourceId("${appPackage}:id/expandable_content")`,
    price: `android=new UiSelector().resourceId("${appPackage}:id/priceOriginalTv")`,
    addToBasketBtn: `android=new UiSelector().resourceId("${appPackage}:id/addToBasketButton")`,
    cartLayout: `android=new UiSelector().resourceId("${appPackage}:id/overlayLayoutBasket")`,
    count: `android=new UiSelector().resourceId("${appPackage}:id/itemCountTv")`,
    searchMenu: `android=new UiSelector().resourceId("${appPackage}:id/searchTv")`,
    searchEditText: `android=new UiSelector().resourceId("${appPackage}:id/editText")`,
    viewBasket: `android=new UiSelector().resourceId("${appPackage}:id/basketTv")`,
    increaseCount: `android=new UiSelector().resourceId("${appPackage}:id/imageView_add")`,
    decreaseCount: `android=new UiSelector().resourceId("${appPackage}:id/imageView_minus")`,
    countTobeAdded: `//android.widget.TextSwitcher/android.widget.TextView`,
    recView: `android=new UiSelector().resourceId("${appPackage}:id/recyclerView")`,
};