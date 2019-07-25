import React, {Component} from 'react'

class LiveMap extends Component {
    render() {
        return (
            <div className="liveMap">
                <h1 className="whereQuestion">Where are we right now? And where are we headed next?</h1>
                <p className="answers">It's not Saturday yet so hold your horses.
                    Check back on Saturday and there will be a live location displayed here along with where we are going next.</p>
            </div>
        )
    }
}

export default LiveMap