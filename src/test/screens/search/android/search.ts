import AppScreen from '../../appScreen';
import Search from "../index"
import { SearchScreenSelectorsADR } from "./selectors"

export default class SearchAppScreenADR extends AppScreen implements Search {
    selectRestraunt(): void {
        this.getElement(SearchScreenSelectorsADR.restaurantName).click()
    }
    searchRestraunt(restraunt: string): void {
        throw new Error("Method not implemented.");
    }
    searchItem(item: string): void {
        this.getElement(SearchScreenSelectorsADR.searchEditText).click()
        this.getElement(SearchScreenSelectorsADR.searchEditText).setValue(item)
        browser.hideKeyboard()
    }


}