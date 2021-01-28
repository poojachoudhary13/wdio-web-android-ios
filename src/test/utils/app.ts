let adbShell = require("shelljs")
import * as constants from "../constants"

export function clearAppData() {
    if (browser.isIOS) throw new Error("This method is ONLY for Android")
    adbShell.exec(`adb -s ${browser.capabilities.udid} shell pm clear ${browser.capabilities.appPackage}`)
    console.log('App data cleared')
}

export function switchToWebView() {
    browser.pause(constants.WAIT_TIMEOUT)
    let contexts = browser.getContexts()
    if (contexts.length > 1) {
        browser.switchContext(contexts[1])
    } else {
        console.log("No webview found")
    }
}

export function switchToNativeContext() {
    browser.pause(constants.WAIT_TIMEOUT)
    let contexts = browser.getContexts()
    browser.switchContext(contexts[0])
}

/**
 * Use this function to allow app permissions in android
 */
export function allowPermissions() {
    if (browser.isAndroid) {
        let permissions = ["android.permission.ACCESS_FINE_LOCATION", "android.permission.WRITE_EXTERNAL_STORAGE", "android.permission.READ_EXTERNAL_STORAGE"]
        permissions.forEach(permission => {
            adbShell.exec(`adb -s ${browser.capabilities.udid} shell pm grant ${browser.capabilities.appPackage} ${permission}`)
        })
    }
}

export function swipeUp(elem: WebdriverIO.Element) {
    let x = elem.getLocation('x')
    let y = elem.getLocation("y")

    browser.touchPerform([{
        action: 'press',
        options: {
            x: x,
            y: y
        }
    }, { action: 'wait', options: { ms: 500 } }, {
        action: 'moveTo',
        options: {
            x: x,
            y: y / 2
        }
    }, {
        action: 'release'
    }]);
}