import AppScreen from '../../appScreen';
import Search from "../index"

export default class SearchAppScreenIOS extends AppScreen implements Search {
    selectRestraunt(name?: string | undefined): void {
        throw new Error("Method not implemented.");
    }
    searchRestraunt(restraunt: string): void {
        throw new Error("Method not implemented.");
    }
    searchItem(item: string): void {
        throw new Error("Method not implemented.");
    }
}