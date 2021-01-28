import {
    DEFAULT_TIMEOUT
} from '../constants';

export default class BasePage {
    waitForIsShown(selector: string, error?: string) {
        $(selector).waitForDisplayed(DEFAULT_TIMEOUT, false, `${selector} is not visible`);
    }

    getElement(selector: string) {
        this.waitForIsShown(selector)
        return $(selector)
    }
}