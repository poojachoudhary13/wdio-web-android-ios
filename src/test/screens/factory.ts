import Login from "./login"
import LoginAppScreenADR from "./login/android/login"
import LoginAppScreenIOS from "./login/ios/login"
import Onboarding from "./onboarding"
import OnboardingAppScreenADR from "./onboarding/android/onboarding"
import OnboardingAppScreenIOS from "./onboarding/ios/onboarding"
import Main from "./main/index"
import MainAppScreenADR from "./main/android/main"
import MainAppScreenIOS from "./main/ios/main"
import Search from "./search/index"
import SearchAppScreenADR from "./search/android/search"
import SearchAppScreenIOS from "./search/ios/search"
import Restraunt from "./restraunt/index"
import RestaurantAppScreenADR from "./restraunt/android/restraunt"
import RestaurantAppScreenIOS from "./restraunt/ios/restraunt"
import Basket from "./basket/index"
import BasketAppScreenADR from "./basket/android/basket"
import BasketAppScreenIOS from "./basket/ios/basket"
/**
 * All the pages that are available over the App
 * Android and iOS pages are to be implemented as per the contract of the respective page
 * Respective implementation will be picked up dynamically over the runtime
 * @export
 */
export default class PageFactory {
    loginScreen: Login = (browser.isAndroid) ? new LoginAppScreenADR : new LoginAppScreenIOS
    onBoardingScreen: Onboarding = (browser.isAndroid) ? new OnboardingAppScreenADR : new OnboardingAppScreenIOS
    mainScreen: Main = (browser.isAndroid) ? new MainAppScreenADR : new MainAppScreenIOS
    searchScreen: Search = (browser.isAndroid) ? new SearchAppScreenADR : new SearchAppScreenIOS
    restrauntScreen: Restraunt = (browser.isAndroid) ? new RestaurantAppScreenADR : new RestaurantAppScreenIOS
    basketScreen: Basket = (browser.isAndroid) ? new BasketAppScreenADR : new BasketAppScreenIOS

}
