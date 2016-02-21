import {I18NAction, I18NStore, UserStore} from 'react_commons'
import alt from './alt'
import WebI18NAction from './WebI18NAction'

class WebI18NStore extends I18NStore {
    constructor() {
        console.log('Initializing WebI18NStore');
        super();
        this.bindListeners({
            setLanguage: WebI18NAction.SET_LANGUAGE
        });
    }
}

export default alt.createStore(WebI18NStore, 'I18NStore');