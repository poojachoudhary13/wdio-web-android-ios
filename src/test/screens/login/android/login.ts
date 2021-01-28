import AppScreen from '../../appScreen';
import { loginScreenSelectors } from "./selectors"
import Login from "../index"
import { testData } from "../../../test-data/app"
import * as utils from "../../../utils/app"
import { DEFAULT_TIMEOUT } from 'test/constants';

export default class LoginAppScreenADR extends AppScreen implements Login {

    signInWithMyApp() {
        this.getElement(loginScreenSelectors.mobileNoEditText).setValue(testData.mobileNo)
        this.getElement(loginScreenSelectors.countryCode).click()
        $(loginScreenSelectors.countryCodeInListView).scrollIntoView()
        this.getElement(loginScreenSelectors.countryCodeInListView).click()
        browser.pause(10000)
        browser.hideKeyboard()
        this.getElement(loginScreenSelectors.signInBtn).click()
    }

    signInWithFacebook() {
        utils.switchToWebView()
        browser.pause(DEFAULT_TIMEOUT / 5)
        this.getElement(loginScreenSelectors.facebook).click()
        utils.switchToNativeContext()
    }
}