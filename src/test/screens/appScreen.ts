import {
    DEFAULT_TIMEOUT
} from '../constants';

export default class AppScreen {

    /**
     * Wait for the element to be visible
     */
    waitForIsShown(selector: string) {
        $(selector).waitForDisplayed(DEFAULT_TIMEOUT);
    }
    /**
    * Returns the required element
    */
    getElement(selector: string) {
        this.waitForIsShown(selector)
        return $(selector)
    }

    tryFor(selector: string, timeout: number): boolean {
        for (let count = 0; count < timeout; count++) {
            browser.pause(1000)
            let status = $(selector).isDisplayed()
            if (status) { return true }
        }
        console.log("Element is still noe even visible even if tried for " + timeout + "seconds")
        return false
    }
}