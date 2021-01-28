import AppScreen from '../../appScreen';
import { restrauntScreenSelectors } from "./selectors"
import { testData } from "../../../test-data/app"
import Restraunt from '../index';
import { assert } from 'chai';
import * as utils from "../../../utils/app"

export default class RestaurantAppScreenADR extends AppScreen implements Restraunt {
    selectItem(): void {
        this.getElement(restrauntScreenSelectors.price).click()
    }
    addToBasket(count: number): void {
        let currentCount = Number(this.getElement(restrauntScreenSelectors.countTobeAdded).getText())
        while (currentCount < count) {
            this.getElement(restrauntScreenSelectors.increaseCount).click()
            currentCount++
            assert.equal(Number(this.getElement(restrauntScreenSelectors.countTobeAdded).getText()), currentCount, "Item Count is not incremented")
        }
        utils.swipeUp($(restrauntScreenSelectors.recView))
        let addBtn = this.getElement(restrauntScreenSelectors.addToBasketBtn)
        addBtn.click()
    }

    addItem(name: string, count: number): void {
        this.getElement(restrauntScreenSelectors.searchEditText).setValue(name)
        this.selectItem()
        this.addToBasket(count)
    }

    clickSearch() {
        this.getElement(restrauntScreenSelectors.searchMenu).click()
    }

    verifyBasketCountOnRestrauntScreen(count: number) {
        assert.equal(Number(this.getElement(restrauntScreenSelectors.count).getText()), count, "Basket count is incorrect on restraunt screen")
    }

    viewBasket() {
        this.getElement(restrauntScreenSelectors.viewBasket).click()
    }
}