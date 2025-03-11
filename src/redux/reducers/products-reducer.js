import { v4 as uuidv4 } from "uuid";
import {
  ADD_PRODUCT,
  CLEAR_SELECTION,
  DELETE_PRODUCT,
  SELECT_PRODUCT,
} from "../types/action-types";

const initialState = {
  products: [
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      name: "HP Laptop",
      description: "HP Pavilion 16 GB DDR4 512 GB SSD",
      price: 72000,
      image:
        "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08510542_1_1_7.png",
      category: "Laptop",
    },
    {
      id: "38a52be4-9352-453e-af97-0e7c786d8783",
      name: "Sony Wireless Headphones",
      description: "Sony WH-1000XM5 Noise Cancelling Wireless Headphones",
      price: 34999,
      image:
        "https://www.sony.co.in/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
      category: "Audio",
    },
    {
      id: "c0a80121-4a82-4a84-89b7-d7cb92d2c2fd",
      name: "Samsung Smart TV",
      description: "Samsung 55-inch 4K QLED Smart TV with HDR",
      price: 82999,
      image: "https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg",
      category: "Television",
    },
    {
      id: "d5f56a74-c2a3-47d4-9d95-8128facf939a",
      name: "Apple iPad Pro",
      description: "iPad Pro 12.9-inch M2 Chip 256GB Wi-Fi",
      price: 119900,
      image:
        "https://editech.co.ke/public/uploads/all/90TxVvyJTo7GPagwRlRFdEvYeVADx8EevzGbXEfK.jpg",
      category: "Tablet",
    },
    {
      id: "7e9a31d6-19d4-4b17-8190-e12d9f65b8be",
      name: "Logitech Gaming Mouse",
      description: "Logitech G502 HERO High Performance Gaming Mouse",
      price: 7995,
      image:
        "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UF1000,1000_QL80_.jpg",
      category: "Gaming",
    },
  ],
  selectedProduct: null,
};

// reducer is a function
// called by redux, when an action is dispatched by a component
// an action dispatched for a UI event (click of a button, for example)
// takes 2 parameters
// 1. current state
// 2. object called action --> represents action to be performed on the state
// example of an action --> {type: 'DELETE_PRODIUCT', payload: 'id-of-product'}

// whenever the state in the store is mutated, all components will recieve the new state

export default function (state = initialState, action) {
  if (action.type === ADD_PRODUCT) {
    // assumption is action.payload is a new product with out id
    const newProduct = { ...action.payload };
    newProduct.id = uuidv4();
    return { ...state, products: [...state.products, newProduct] };
  }

  if (action.type === DELETE_PRODUCT) {
    // assumption is action.payload is the id of the product to be deleted
    const existingProducts = [...state.products];
    const remainingProucts = existingProducts.filter(
      (p) => p.id !== action.payload
    );
    return { ...state, products: remainingProucts };
  }

  if (action.type === SELECT_PRODUCT) {
    // assumption is action.payload is the product for selection
    return { ...state, selectedProduct: action.payload };
  }

  if (action.type === CLEAR_SELECTION) {
    return { ...state, selectedProduct: null };
  }

  return state;
}
