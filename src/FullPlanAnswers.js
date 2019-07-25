import React, {Component} from 'react'

class FullPlanAnswers extends Component {
    render() {
        return (
            <p className="answers">
                <span className="fullPlanTime">{this.props.time}</span> - <span>{this.props.place}</span>, <span>{this.props.desc}</span>
            </p>
        )
    }
}

export default FullPlanAnswers