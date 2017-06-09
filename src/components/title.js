import React from "react"

class Title extends React.Component {
    render() {
        return(
            <div className="title">
                <h1>Monthly Global Land-Surface Temperature</h1>
                <h2>1753 - 2015</h2>
                <p>Temperatures are in Celsius and reported as anomalies relative to the Jan 1951-Dec 1980 average. 
                    <br/>Estimated Jan 1951-Dec 1980 absolute temperature ℃: 8.66 +/- 0.07
                </p>
            </div>
        )
    }
}

export default Title
