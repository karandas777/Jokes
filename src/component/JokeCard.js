import React, { Component } from 'react'

export default class JokeCard extends Component {
    render() {
        const {setup, punchline} = this.props.joke;
        return (
            <div className="p-4 rounded bg-dark text-light shadow my-3">
                <div className="h3 chatcard">{setup}</div>
                <div className="h3 chatcard mb-0"><i className="fa fa-caret-right text-primary"></i> {punchline}</div>
            </div>
        )
    }
}
