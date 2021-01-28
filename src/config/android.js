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