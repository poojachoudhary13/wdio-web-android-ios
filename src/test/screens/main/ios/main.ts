import AppScreen from '../../appScreen';
import Main from '..';

export default class MainAppScreenIOS extends AppScreen implements Main {
    isMainScreenOpen(): boolean {
        throw new Error("Method not implemented.");
    }
    clickSearch(): void {
        throw new Error("Method not implemented.");
    }

}