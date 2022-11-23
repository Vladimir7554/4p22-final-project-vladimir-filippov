import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout/Layout";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import ProductPage from "./pages/ProductPage";

function FeedBackPage() {
    return null;
}

const App = () => {
    return (
        <BrowserRouter basename="/4p22-final-project-vladimir-filippov">
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<HomePage />} />
                    <Route path="/basket" element={<BasketPage />} />
                    <Route path="/feedback" element={<FeedBackPage />} />
                    <Route path="/catalog/:id" element={<ProductPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;