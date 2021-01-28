import BasePage from "./basePage";
import { captainSignup } from "../test-data/web"
import { assert } from 'chai';

const SELECTORS = {
    NAME_EDIT_TEXT: '//input[@id=\"text-yui_3_17_2_1_1544091078613_606813-field\"]',
    COUNTRY_DROPDOWN: '//select[@name=\"select-yui_3_17_2_1_1544975667683_63760-field\"]',
    COUNTRY_NAME: 'option',
    PHONE_NO: '//div[@id=\"number-yui_3_17_2_1_1542710767417_2152229\"]',
    CITY: '//div[@id=\"text-yui_3_17_2_1_1544975667683_78864\"]',
    EDIT_TEXT: 'input',
    ID: '//div[@id=\"number-yui_3_17_2_1_1544091078613_617008\"]',
    DRIVER_LICENSE: '//div[@id=\"number-yui_3_17_2_1_1544091078613_618068\"]',
    VEHICLE_REG_NO: '//div[@id=\"text-yui_3_17_2_1_1544091078613_620684\"]',
    SUBMIT: '//input[@value=\"Submit\"]',
    SIGNUP_SUBMISSION_THANKYOU: '.form-submission-text=Thank you!',
    ERROR: '.field-error=Phone Number is not valid. Numbers must contain only digits and no other characters.'
};

export default class CaptainSignup extends BasePage {

    enterName() {
        this.getElement(SELECTORS.NAME_EDIT_TEXT).setValue(captainSignup.name)
    }

    validateCountryList() {
        let countryDropdown = this.getElement(SELECTORS.COUNTRY_DROPDOWN)
        assert.equal(countryDropdown.getValue(), captainSignup.countryList[0], "Default country text is not correct in country dropdown")
        countryDropdown.click()
        let countryList = countryDropdown.$$(SELECTORS.COUNTRY_NAME)
        let countryCount = countryList.length
        for (let country = 0; country < countryCount; country++) {
            assert.equal(countryList[country].getValue(), captainSignup.countryList[country], "Country in the country list is not correct")
        }
    }

    selectCountry(countryName: string) {
        let countryDropdown = this.getElement(SELECTORS.COUNTRY_DROPDOWN)
        countryDropdown.click()
        let countryList = countryDropdown.$$(SELECTORS.COUNTRY_NAME)
        let countryCount = countryList.length
        for (let country = 0; country < countryCount; country++) {
            if (countryList[country].getValue() == countryName) {
                countryList[country].click()
            }
        }
    }

    enterPhoneNo(phoneNo: string) {
        let phoneNoDiv = this.getElement(SELECTORS.PHONE_NO)
        let phoneNoEditText = phoneNoDiv.$$(SELECTORS.EDIT_TEXT)[0]
        phoneNoEditText.setValue(phoneNo)
    }

    verifyinvalidPhoneNoCheck() {
        this.waitForIsShown(SELECTORS.ERROR)
        assert.isTrue($(SELECTORS.ERROR).isDisplayed(), "Error for invalid phone no. did not show up.")
    }

    enterCity(city: string) {
        let cityDiv = this.getElement(SELECTORS.CITY)
        let cityEditText = cityDiv.$$(SELECTORS.EDIT_TEXT)[0]
        cityEditText.setValue(city)
    }

    enterID(ID: string) {
        let idDiv = this.getElement(SELECTORS.ID)
        let idEditText = idDiv.$$(SELECTORS.EDIT_TEXT)[0]
        idEditText.setValue(ID)
    }

    enterDrivingLicense(drivingLicenseNo: string) {
        let drivingLicenseDiv = this.getElement(SELECTORS.DRIVER_LICENSE)
        let drivingLicenseEditText = drivingLicenseDiv.$$(SELECTORS.EDIT_TEXT)[0]
        drivingLicenseEditText.setValue(drivingLicenseNo)
    }

    selectVehicleType(vehicleType: string) {
        $(`//input[@value=\"${vehicleType}\"]`).click()
    }

    enterVehicleRegNo(vehicleRegNo: string) {
        let vehicleRegNoDiv = this.getElement(SELECTORS.VEHICLE_REG_NO)
        let vehicleRegNoEditText = vehicleRegNoDiv.$$(SELECTORS.EDIT_TEXT)[0]
        vehicleRegNoEditText.setValue(vehicleRegNo)
    }

    clickSubmit() {
        this.getElement(SELECTORS.SUBMIT).click()
    }

    verifySuccessfulSignUp() {
        assert.isTrue(this.getElement(SELECTORS.SIGNUP_SUBMISSION_THANKYOU).isDisplayed(), "Thankyou text is not visible. Signup unsuccessful!!!")
    }
}