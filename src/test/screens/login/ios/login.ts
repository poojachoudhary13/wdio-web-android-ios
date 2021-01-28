import AppScreen from '../../appScreen';
// import { loginScreenSelectors } from "./selectors"
import Login from "../index"

export default class LoginAppScreenIOS extends AppScreen implements Login {
    signInWithFacebook(): void {
        throw new Error("Method not implemented.");
    }

    signInWithMyApp(): void {
        throw new Error("Method not implemented.");
    }
}