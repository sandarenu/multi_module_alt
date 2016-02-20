import React, {Component} from 'react'
import render from 'react-dom'
import AltContainer from 'alt-container';

var Stores = require('../Stores')
var MyUserStore = Stores.MyUserStore
var MyI18NStore = Stores.MyI18NStore



require('bootstrap/dist/css/bootstrap.min.css');
require('./Main.scss');


class Main extends Component {

    componentWillMount() {
        console.log("Initializing Main Component")
    }

    render() {
        return (
            <AltContainer
                stores={{
                    user: MyUserStore
                  }}
                inject={{
                    i18n: function (props) {
                      return MyI18NStore.getState().value
                    },
                    selectedLanguage: function(props){
                        return MyI18NStore.getState().selectedLanguage
                    }
                  }}>

                {this.props.children}

            </AltContainer>
        )
    }
}

export default Main;