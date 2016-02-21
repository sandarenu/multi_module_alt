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

        this.on('init', () => {
            console.log("init called....")
        });

        this.on('error', (err, payload, currentState) => {
            if (payload.action === MyActions.fire) {
                logError(err, payload.data);
            }
        });

        this.exportPublicMethods({
            setLanguage: this.setLanguage
        });

        console.log("I18NStore init finished")
        //this.bindListeners({
        //    setLanguage: I18NAction.SET_LANGUAGE
        //});
    }

    setLanguage(lang) {
        this.selectedLanguage = lang;
        console.log("Selected language: " + this.selectedLanguage);
    }

}


