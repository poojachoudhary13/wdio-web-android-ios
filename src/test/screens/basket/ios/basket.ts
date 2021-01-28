import AppScreen from '../../appScreen';
import Basket from '../index';

export default class BasketAppScreenIOS extends AppScreen implements Basket {
    verifyCount(shouldBeCount: number): void {
        throw new Error("Method not implemented.");
    }
}