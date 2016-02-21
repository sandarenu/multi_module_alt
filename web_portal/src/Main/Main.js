import React, {Component} from 'react'
import render from 'react-dom'
import AltContainer from 'alt-container';

var Stores = require('../Stores')
var MyUserStore = Stores.MyUserStore
var MyI18NStore = Stores.MyI18NStore

import WebI18NStore from './../WebI18NStore'



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
                    user: MyUserStore,
                    webI18n: WebI18NStore
                  }}>

                {this.props.children}

            </AltContainer>
        )
    }
}

export default Main;