import React, {Component} from 'react'
import FullPlanAnswers from "./FullPlanAnswers";

class FullMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fullMap">
                <h1 className="whereQuestion">What's the full plan?</h1>
                <FullPlanAnswers
                    time="10 AM"
                    place="Cafe Intermezzo"
                    desc="Coffee & Breakfast"
                />
                <FullPlanAnswers
                    time="11 AM"
                    place="Piedmont Park"
                    desc="Brew & Snacks"
                />
                <FullPlanAnswers
                    time="12 PM"
                    place="The Highlander"
                    desc="Degeneracy Part I"
                />
                <FullPlanAnswers
                    time="1 PM"
                    place="Ponce City Market"
                    desc="Bites & Brews"
                />
                <FullPlanAnswers
                    time="2 PM"
                    place="The Local"
                    desc="Nostalgia Part I"
                />
                <FullPlanAnswers
                    time="3 PM"
                    place="Claremont Lounge"
                    desc="Degeneracy Part II"
                />
                <FullPlanAnswers
                    time="4 PM"
                    place="Manuel's Tavern"
                    desc="Cleansing from Degeneracy"
                />
                <FullPlanAnswers
                    time="5 PM"
                    place="The Vortex"
                    desc="Bucket List Burgers"
                />
                <FullPlanAnswers
                    time="6 PM"
                    place="Little 5P"
                    desc="Chillin'"
                />
                <FullPlanAnswers
                    time="7 PM"
                    place="Victory Sandwich Bar"
                    desc="Nostalgia Part II"
                />
                <FullPlanAnswers
                    time="8 PM"
                    place="Jack's Pizza and Wings"
                    desc="Nostalgia Part III"
                />
                <FullPlanAnswers
                    time="9 PM"
                    place="Ladybird"
                    desc="Calm before the storm"
                />
                <FullPlanAnswers
                    time="10 PM - onwards"
                    place="Edgewood Ave"
                    desc="Ya'll already know what's good with this"
                />
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1l66bIKjFQ5e4Buv4XIXUB5M0wIjgrdNE" className="fullMapMap"  title="Google Map Full" />
            </div>
        )
    }
}

export default FullMap