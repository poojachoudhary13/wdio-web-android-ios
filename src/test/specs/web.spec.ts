import HomePage from "../pages/home";
import CaptainSignup from "../pages/captainsignup"
import { captainSignup } from "../test-data/web"
import { DEFAULT_TIMEOUT } from "test/constants";

let homePage: HomePage = new HomePage,
    captainSignupPage: CaptainSignup = new CaptainSignup

describe('MyApp Now web', () => {
    before(() => {
        browser.url('https://www.MyAppnow.com');
    });

    it('Register success testcase', () => {
        homePage.clickSignUp()
        captainSignupPage.enterName()
        captainSignupPage.validateCountryList()
        captainSignupPage.selectCountry(captainSignup.country)
        captainSignupPage.enterCity(captainSignup.city)
        captainSignupPage.enterPhoneNo(captainSignup.invalidPhoneNo)
        captainSignupPage.enterID(captainSignup.id)
        captainSignupPage.enterDrivingLicense(captainSignup.driverLicence)
        captainSignupPage.selectVehicleType(captainSignup.vehicle)
        captainSignupPage.enterVehicleRegNo(captainSignup.vehicleRegNo)
        captainSignupPage.clickSubmit()
        captainSignupPage.verifyinvalidPhoneNoCheck()
        captainSignupPage.enterPhoneNo(captainSignup.phoneNo)
        browser.pause(DEFAULT_TIMEOUT / 6)
        captainSignupPage.clickSubmit()
        captainSignupPage.verifySuccessfulSignUp()
    });

    after(() => {
        browser.closeWindow()
    })
});