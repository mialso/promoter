import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeLabelInput from './HomeLabelInput';

class SearchForm extends Component {
    static propTypes = {
        submitAction: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            businessName: '',
            phone: '',
            locationZIP: '',
            focus: {
                businessName: false,
                phone: false,
                locationZIP: false,
            },
        };
    }
    getVisibility = (name) => {
        const visibility = this.state.focus[name] ? 'visible' : 'hidden';
        return visibility;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.isValid()) {
            this.props.submitAction({
                name: this.state.businessName,
                zipcode: this.state.locationZIP,
            });
        }
    }
    handleInputChange = (e) => {
        const stateChange = {};
        stateChange[e.target.name] = e.target.value;
        this.setState(stateChange);
    }
    handleFocus = (e) => {
        const newFocus = {};
        newFocus[e.target.name] = true;
        this.setState({ focus: Object.assign({}, this.state.focus, newFocus) });
    }
    handleBlur = (e) => {
        const newFocus = {};
        newFocus[e.target.name] = !!this.state[e.target.name];
        this.setState({ focus: Object.assign({}, this.state.focus, newFocus) });
    }
    isValid = () => {
        const isNameValid = this.state.businessName.length > 0;
        const isLocationValid = this.state.locationZIP.length > 0;
        return isLocationValid && isNameValid;
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <HomeLabelInput
                    displayName="Business name"
                    name="businessName"
                    value={this.state.businessName}
                    onChange={this.handleInputChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    labelVisibility={this.getVisibility('businessName')}
                />
                <HomeLabelInput
                    displayName="Phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    labelVisibility={this.getVisibility('phone')}
                />
                <label className="Home-label" htmlFor="locationZIP">
                    <div
                        className="Home-labelText"
                        style={{ visibility: this.getVisibility('locationZIP') }}
                    >
                        Location
                    </div>
                    <input
                        type="number"
                        min="0"
                        maxLength="6"
                        placeholder={this.getVisibility('locationZIP') === 'visible' ? '' : 'Location'}
                        id="locationZIP"
                        name="locationZIP"
                        value={this.state.locationZIP}
                        onChange={this.handleInputChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                </label>
                <button type="sumbit" disabled={!this.isValid()}>Search</button>
            </form>
        );
    }
}

export default SearchForm;
