import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout/Layout";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import ProductPage from "./pages/ProductPage";
import FeedbackPage from "./pages/FeedbackPage";
import AppContext from "./context";

const App = () => {

    const [basketItems, setBasketItems] = useState([])

    return (
        <AppContext.Provider value={{
            basketItems,
            setBasketItems,
        }}
        >

        <BrowserRouter basename="/4p22-final-project-vladimir-filippov">
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<HomePage />} />
                    <Route path="/basket" element={<BasketPage />} />
                    <Route path="/feedback" element={<FeedbackPage />} />
                    <Route path="/catalog/:id" element={<ProductPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;