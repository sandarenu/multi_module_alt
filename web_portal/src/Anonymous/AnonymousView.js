import React, {Component} from 'react'
import render from 'react-dom'
import { Link } from 'react-router'
import WebI18NAction from './../WebI18NAction'

class AnonymousView extends Component {

    componentWillMount() {
        console.log("Initializing AnonymousView Component")
    }

    render() {
        return (
            <div>

                <h3>
                    { this.props.webI18n.value.anonView.description.part1 }
                    <span class="header-text-bold">{ this.props.webI18n.value.anonView.description.part2 }</span>
                </h3>

                <p>Selected Language: {this.props.webI18n.selectedLanguage}</p>

                <select onChange={this.langChanged} value={this.props.webI18n.selectedLanguage}>
                    <option value="en">English</option>
                    <option value="sin">Sinhala</option>
                </select>

            </div>
        );
    }

    langChanged(event){
        console.log("Language changed..." + event.target.value);
        WebI18NAction.setLanguage(event.target.value)
    }
}

export default AnonymousView;