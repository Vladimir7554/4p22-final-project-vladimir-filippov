import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout/Layout";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import ProductPage from "./pages/ProductPage";
import FeedbackPage from "./pages/FeedbackPage";
import { AppContext, defaultContextValue } from "./context";

const App = () => {
    return (
        <AppContext.Provider value={defaultContextValue}>
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