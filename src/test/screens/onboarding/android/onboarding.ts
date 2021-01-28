import AppScreen from '../../appScreen';
import { OnboardingScreenSelectorsADR } from "./selectors"
import Onboarding from "../index"

export default class OnboardingAppScreenADR extends AppScreen implements Onboarding {

    clickSignInWithMyApp() {
        this.waitForIsShown(OnboardingScreenSelectorsADR.signInBtn);
        let elem = $(OnboardingScreenSelectorsADR.signInBtn)
        elem.click()
    }

}