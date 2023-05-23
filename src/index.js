import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './component/navBar/navBar';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import ItemListContainer from './component/itemLstContainer/ItemListContainer';

import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <ItemListContainer greeting={'Bienvenidos a la tienda'}/>
  },
  { 
    path: "/component/navBar/navBar",
    element: <NavBar/>
  },
  { 
    path: "/component/ItemDetailContainer/ItemDetailContainer",
    element: <ItemDetailContainer/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
