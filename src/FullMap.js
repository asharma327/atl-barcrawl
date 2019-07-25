import React, {Component} from 'react'

class FullMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fullMap">
                <h1 className="whereQuestion">What's the full plan?</h1>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1l66bIKjFQ5e4Buv4XIXUB5M0wIjgrdNE" width="640" height="480" title="Google Map Full" />
            </div>
        )
    }
}

export default FullMap