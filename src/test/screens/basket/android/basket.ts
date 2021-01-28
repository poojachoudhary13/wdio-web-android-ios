import AppScreen from '../../appScreen';
import { BasketScreenSelectors } from "./selectors"
import { testData } from "../../../test-data/app"
import Basket from '../index';
import { assert } from 'chai';


export default class BasketAppScreenADR extends AppScreen implements Basket {
    verifyCount(shouldBeCount: number): void {
        let list = browser.findElements('xpath', BasketScreenSelectors.count)
        let basketCount = 0;

        for (let count = 0; count < list.length; count++) {
            let elem = JSON.stringify(list[count]),
                elem2 = JSON.parse(elem),
                elemId = elem2['ELEMENT']
            console.log("stringfy" + elem)

            basketCount = basketCount + Number(browser.getElementText(elemId))
        }
        assert.equal(basketCount, shouldBeCount, "Basket count is not as expected")
    }
}