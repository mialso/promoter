import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Star from './SvgStar';
import { promoteBusinessItemAction } from '../actions/promote';

import '../css/BusinessItem.css';

function getCheckboxId(id) {
    return `checkbox_${id}`;
}

function getNubmersArray(number) {
    const items = Number.parseInt(number, 10);
    const result = [];
    for (let i = 0; i < items; i += 1) {
        result.push({ key: i, num: 1 });
    }
    const lastValue = number % 1;
    if (lastValue > 0) {
        result.push({ key: result.length, num: lastValue });
    }
    return result;
}

class BusinessItem extends Component {
    promoteItem = () => {
        this.props.promoteBusinessItemAction({
            itemId: this.props.itemImmutable.get('id'),
            provider: this.props.itemImmutable.get('reviewType'),
        });
    }
    render() {
        const { itemImmutable, isPromoted } = this.props;
        if (!(itemImmutable && itemImmutable.size > 0)) return null;
        const itemData = itemImmutable.toJS();
        return (
            <div className="Item BusinessItem">
                <div className="BusinessItem-checkbox">
                    <label htmlFor={getCheckboxId(itemData.id)}>
                        <input id={getCheckboxId(itemData.id)} type="checkbox" checked={isPromoted} onChange={this.promoteItem} />
                        <div className="Checkbox-styleLabel" />
                    </label>
                </div>
                <div className="BusinessItem-description">
                    <div className="BusinessItem-descriptionHeader" >
                        <div className="BusinessItem-name">
                            { itemData.name }
                        </div>
                        <div className="BusinessItem-rating">
                            {
                                itemData.rating > 0 && getNubmersArray(itemData.rating)
                                    .map(numData => (
                                        <Star key={numData.key} size={15} number={numData.num} />
                                    ))
                            }
                        </div>
                    </div>
                    <div>{ itemData.phone }</div>
                    <div>{ itemData.address1 }</div>
                </div>
            </div>
        );
    }
}

BusinessItem.propTypes = {
    itemImmutable: PropTypes.instanceOf(Object).isRequired,
    isPromoted: PropTypes.bool.isRequired,
    promoteBusinessItemAction: PropTypes.func.isRequired,
};

function mapStateToProps({ businessItems, providers }, { itemId }) {
    return {
        itemImmutable: businessItems.getIn(['byId', itemId]),
        isPromoted: providers.valueSeq().reduce((acc, entry) => entry.get('itemToPromote') === itemId || acc, false),
    };
}

export default connect(
    mapStateToProps,
    {
        promoteBusinessItemAction,
    },
)(BusinessItem);
