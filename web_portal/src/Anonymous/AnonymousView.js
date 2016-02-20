import React, {Component} from 'react'
import render from 'react-dom'
import { Link } from 'react-router'

class AnonymousView extends Component {

    componentWillMount() {
        console.log("Initializing AnonymousView Component")
    }

    render() {
        return (
            <div>

                <h3>
                    { this.props.i18n.anonView.description.part1 }
                    <span class="header-text-bold">{ this.props.i18n.anonView.description.part2 }</span>
                </h3>

                <p>Selected Language: {this.props.selectedLanguage}</p>

            </div>
        );
    }
}

export default AnonymousView;