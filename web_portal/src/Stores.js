import {I18NAction, I18NStore, UserStore} from 'react_commons'
import alt from './alt'

exports.WebI18NAction = alt.createActions(I18NAction);

exports.MyUserStore = alt.createStore(UserStore, 'UserStore');

exports.MyI18NStore = alt.createStore(I18NStore, 'I18NStore');