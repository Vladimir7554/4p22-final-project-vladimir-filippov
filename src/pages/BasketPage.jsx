import React, {useContext} from 'react';
import AppContext from "../context";

const BasketPage = () => {
    const { basketItems, setBasketItems } = useContext(AppContext)

    let totalAmount = 0

    basketItems.forEach(({ amount }) => totalAmount += amount)

    return (
        <div>
            BASKET PAGE
            {/*<div>Total Price: {basketTotalPrice.toFixed(2)} $</div>*/}
            <div>Total Amount: {totalAmount}</div>
        </div>
    );
};

export default BasketPage;