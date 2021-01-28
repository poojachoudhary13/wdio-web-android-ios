exports.config = {
    runner: 'local',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000,
        require: [
            'tsconfig-paths/register'
        ]
    },
    sync: true,
    deprecationWarnings: true,
    bail: 0,
    baseUrl: '',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    path: '/wd/hub',
    host: "0.0.0.0",
    port: 4723,

    before: function () {
        require('ts-node').register({
            files: true
        });
    },
    afterTest: function (test) {
        browser.takeScreenshot();
    },
};