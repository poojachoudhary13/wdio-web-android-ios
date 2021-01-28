const {
    config
} = require('./common');

config.specs = [
    './src/test/specs/web.spec.ts',
];

config.capabilities = [{
    browserName: "chrome",
    'goog:chromeOptions': {},
    maxInstances: 1
}, ];

config.services = ['chromedriver'];


exports.config = config;