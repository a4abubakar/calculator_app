import React, { Component } from 'react'
import infixToPostfix  from 'infix-to-postfix'

class HistoryComponent extends Component {
    render() {
        let {result, expression} = this.props;
        return (
            <div>
                <p>-----------------------</p>
                <p>{'=> ' + expression}</p>
                <p>{'~> ' + infixToPostfix(expression)}</p>
                <p>{'== ' + result}</p>
                <p>-----------------------</p>
            </div>
        )
    }
}

export default HistoryComponent