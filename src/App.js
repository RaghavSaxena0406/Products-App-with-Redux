import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProductList />
            </div>
            <div className="col-md-4">
              <ProductPage />
            </div>
          </div>
          <Footer />
        </div>
      </Provider>
    </>
  );
};

export default App;
