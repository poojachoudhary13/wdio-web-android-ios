const {
    config
} = require('./common');

config.specs = [
    './src/test/specs/app.spec.ts',
];

config.capabilities = [{
    platformName: "ios",
    platformVersion: "12.1",
    // app: "../apps/ios/pax.app",
    bundleId: "com.roundmenu", //just for sample
    deviceName: "iPhone XS",
    autoAcceptAlerts: true,
    gpsEnabled: true,
    noReset: true,
    fullReset: false,
    newCommandTimeout: 60000,
    ignoreUnimportantViews: true,
    automationName: "XCUITest",
    appName: "test"
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