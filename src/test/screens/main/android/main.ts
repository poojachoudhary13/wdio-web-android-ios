import AppScreen from '../../appScreen';
import Main from '..';
import { MainScreenSelectorsADR } from "./selectors"

export default class MainAppScreenADR extends AppScreen implements Main {
    isMainScreenOpen(): boolean {
        return this.tryFor(MainScreenSelectorsADR.deliverTo, 30)
    }
    clickSearch(): void {
        this.getElement(MainScreenSelectorsADR.search).click()
    }

}