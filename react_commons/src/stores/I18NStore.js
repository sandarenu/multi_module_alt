import I18NAction from './../actions/I18NAction'

export default class I18NStore {

    constructor() {
        console.log('Initializing I18NStore');

        this.selectedLanguage = "en";
        this.value = {
            anonView: {
                description: {
                    part1: "Some discription"
                }
            }
        };

        this.bindListeners({
            setLanguage: I18NAction.SET_LANGUAGE
        });
    }

    setLanguage(lang) {
        this.selectedLanguage = lang;
        console.log("Selected language: " + this.selectedLanguage);
    }

}


