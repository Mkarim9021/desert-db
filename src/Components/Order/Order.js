import React from 'react';

const Order = (props) => {
    const { order } = props;
    console.log(order);
    let count = 0;
    for (const meal of order) {
        count = count + meal.quantity
    }
    return (
        <div>
            <h2>Name of your order</h2>
            <h4>Ordered items: {count}</h4>
        </div>
    );
};

export default Order;