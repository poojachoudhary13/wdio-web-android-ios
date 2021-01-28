import PageFactory from "../screens/factory"
import * as utils from "../utils/app"
import { testData } from "../test-data/app"
import { assert } from "chai"

describe(`Careen Now`, () => {
    let pageFactory = new PageFactory()

    before(() => {
        utils.clearAppData()
        let geoLocation = {
            latitude: testData.latitude,
            longitude: testData.longitude,
            altitude: testData.altitude
        }
        browser.setGeoLocation(geoLocation) // setting location to abu dhabhi
    });

    beforeEach(() => {
        browser.reloadSession()
        utils.allowPermissions()
    });

    it('Login with Facebook and Add items to Basket', () => {
        let itemCount: number = 0;
        let totalCount: number = 0;
        pageFactory.onBoardingScreen.clickSignInWithMyApp()
        if (!pageFactory.mainScreen.isMainScreenOpen()) { pageFactory.loginScreen.signInWithFacebook() }
        assert.isTrue(pageFactory.mainScreen.isMainScreenOpen(), "Main screen is not open. User might not be logged in")
        pageFactory.mainScreen.clickSearch()
        pageFactory.searchScreen.searchItem(testData.searchFood)
        pageFactory.searchScreen.selectRestraunt()
        pageFactory.restrauntScreen.clickSearch()
        testData.items.forEach(item => {
            pageFactory.restrauntScreen.addItem(item, testData.count[itemCount])
            totalCount = totalCount + testData.count[itemCount]
            itemCount++
        });
        pageFactory.restrauntScreen.verifyBasketCountOnRestrauntScreen(totalCount)
        pageFactory.restrauntScreen.viewBasket()
        pageFactory.basketScreen.verifyCount(totalCount)
    });

    after(() => {
        browser.closeApp()
    })
})