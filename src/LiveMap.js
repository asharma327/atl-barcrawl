import React, {Component} from 'react'

class LiveMap extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentName: '',
            currentAddress: '',
            nextName: '',
            nextAddress: ''
        }

        this.isTodayCrawlDay = this.isTodayCrawlDay.bind(this);
        this.getAddressLink = this.getAddressLink.bind(this);

    }

    isTodayCrawlDay(){
        const todaysDate = new Date();

        if (todaysDate.getDate() === 27 && todaysDate.getMonth() === 6 && todaysDate.getFullYear() === 2019) {
            return true
        }
        else{
            return false
        }
    }

    getAddressLink(address){
        return "https://www.google.com/maps/search/?api=1&query=" + address.replace(" ", "%20");
    }

    componentWillMount(){
        if (this.isTodayCrawlDay()){
            // API for testing or Development
            const browserDomain = window.location.origin;

            let API_Root;

            if (browserDomain.includes("localhost")){
                API_Root = "http://127.0.0.1:8000/";
            }
            else{
                API_Root = "https://api-woyera.com/";
            }

            fetch(API_Root + 'api/get-barcrawl-location')
                .then(res => res.json())
                .then((data) =>
                {
                    if (!data.error){
                        this.setState({
                            currentName: data.currentName,
                            currentAddress: data.currentAddress,
                            nextName: data.nextName,
                            nextAddress: data.nextAddress
                        })
                    }
                }
            ).catch(err => console.log(err))
        }
    }

    render() {
        if (this.isTodayCrawlDay()){
            const currAddressLink  = this.getAddressLink(this.state.currentAddress);
            const nextAddressLink = this.getAddressLink(this.state.nextAddress);

            return(
                <div className="liveMap">
                    <h1 className="whereQuestion">Where are we right now?</h1>
                    <p style={{fontSize: '250%', marginTop: '-5px'}}>{this.state.currentName}</p>
                    <div style={{marginTop: '-50px'}}>
                        <a style={{fontSize: '175%', textDecoration: 'none'}} href={currAddressLink} rel="noopener noreferrer" target="_blank">{this.state.currentAddress}</a>
                    </div>
                    <h1 className="whereQuestion">And where are we headed next?</h1>
                        <p style={{fontSize: '250%', marginTop: '-5px'}}>{this.state.nextName}</p>
                    <div style={{marginTop: '-50px'}}>
                        <a style={{fontSize: '175%', textDecoration: 'none'}} href={nextAddressLink} rel="noopener noreferrer" target="_blank">{this.state.nextAddress}</a>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="liveMap">
                    <h1 className="whereQuestion">Where are we right now? And where are we headed next?</h1>
                    <p className="answers">The barcrawl is over! Thanks for coming motha' fuckas'</p>
                </div>
            )
        }
    }
}

export default LiveMap