import AppScreen from '../../appScreen';
// import { restrauntScreenSelectors } from "./selectors"
import { testData } from "../../../test-data/app"
import Restraunt from '../index';

export default class RestaurantAppScreenIOS extends AppScreen implements Restraunt {
    viewBasket(): void {
        throw new Error("Method not implemented.");
    }
    verifyBasketCountOnRestrauntScreen(count: number): void {
        throw new Error("Method not implemented.");
    }
    clickSearch(): void {
        throw new Error("Method not implemented.");
    }
    selectItem(name?: string | undefined): void {
        throw new Error("Method not implemented.");
    }
    addToBasket(count: number): void {
        throw new Error("Method not implemented.");
    }
    addItem(name: string, count: number): void {
        throw new Error("Method not implemented.");
    }
}