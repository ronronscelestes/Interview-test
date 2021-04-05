import React, { Component } from 'react'

export class CustomImage extends Component {
    state = {
        url: '',
        size: 80
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    render() {
        const {url, size} = this.state;
        console.log(size);
        return (
            <div style={{display: 'flex', flexDirection:'column', alignItems:'center', marginTop:'50px'}}>
                <h1>Customize image</h1>
                <input 
                    onChange={this.handleChange}
                    value={url}
                    type="text"
                    name='url'
                    
                />

                <input 
                    onChange={this.handleChange}
                    value={size}
                    type="range"
                    name='size'
                    min="10" max="200"
                />
                {url &&
                    <img 
                        src={url} alt=""
                        style={{width: size + 'px', height:size + 'px'}}
                    />
                }
            </div>
        )
    }
}

export default CustomImage
