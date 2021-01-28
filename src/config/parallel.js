const {
    config
} = require('./common');

config.specs = [
    './src/test/specs/app.spec.ts',
];

config.capabilities = [{
    platformName: 'Android',
    maxInstances: 1,
    deviceName: 'Pixel_8.1',
    platformVersion: '8.1',
    udid: 'ZY322DNTFG',
    appPackage: 'com.roundmenu',
    appActivity: '.splash.Splash',
    automationName: 'UiAutomator2',
    noReset: true,
    autoGrantPermissions: true,
    newCommandTimeout: 240,
    showChromedriverLog: true,
    chromeOptions: {
        'androidPackage': 'com.android.chrome'
    }
}, {
    platformName: "ios",
    platformVersion: "12.1",
    bundleId: "com.roundmenu", //just for sample
    deviceName: "iPhone XS",
    autoAcceptAlerts: true,
    gpsEnabled: true,
    noReset: true,
    fullReset: false,
    newCommandTimeout: 60000,
    ignoreUnimportantViews: true,
    automationName: "XCUITest",
    appName: "Grab"
}];

config.services = ['appium'];
config.appium = {
    args: {
        address: "0.0.0.0",
        port: 4723,
        commandTimeout: "7200",
        sessionOverride: true,
        debugLogSpacing: true,
    }
};

exports.config = config;