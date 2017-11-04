import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businessName: '',
            phone: '',
            locationZIP: '',
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit %s', JSON.stringify(this.state));
    }
    handleInputChange = (e) => {
        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="businessName">
                    Business Name
                    <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={this.state.businessName}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label htmlFor="phone">
                    Phone
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label htmlFor="locationZIP">
                    Current location
                    <input
                        type="text"
                        id="locationZIP"
                        name="locationZIP"
                        value={this.state.locationZIP}
                        onChange={this.handleInputChange}
                    />
                </label>
                <button type="sumbit">Search</button>
            </form>
        );
    }
}

export default SearchForm;
