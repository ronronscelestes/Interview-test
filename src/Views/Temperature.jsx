import React, { Component } from 'react'

export class Temperature extends Component {
    state = {
        temp: ''
    }

    handleChange = (event) => {
        this.setState({temp: Number(event.target.value)});
    }

    render() {
        const {temp} = this.state;
        return (
            <div style={{marginTop:'50px'}}>
                <h1>Temperature</h1>
                <input 
                    onChange={this.handleChange}
                    type="number"
                    value={temp}
                    name="temp"
                />
                {temp && 
                    <h2
                    style={{color: temp < 10 ? 'blue' :
                    temp > 30 ? `red` : 
                    'orange'}}>
                        {temp < 10 ? `It's cold ❄️` : 
                        temp > 30 ? `It's warm ☀️` : 
                        `It's nice 🌼`}
                    </h2>
                }
            </div>
        )
    }
}

export default Temperature
