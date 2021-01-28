import BasePage from "./basePage";

const SELECTORS = {
    SIGNUP: '=SIGN UP',
};

export default class HomePage extends BasePage {

    clickSignUp() {
        $(SELECTORS.SIGNUP).scrollIntoView()
        this.getElement(SELECTORS.SIGNUP).click()
        browser.pause(5000)
    }
}