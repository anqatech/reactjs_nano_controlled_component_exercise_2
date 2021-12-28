import React, {Fragment} from "react";
import PropTypes from 'prop-types'


const ListItems = ({ items }) => {

    return (
        <Fragment>
            <p className="items">Items</p>
            <ol className="item-list">
            {items.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
        </Fragment>
    )
}

ListItems.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ListItems
