import { legacy_createStore } from "redux";
import ProductReducer from "./Components/ProductPages/StoreContent/ProductReducer";


const store = legacy_createStore(ProductReducer);

export default store;