import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RootLayOut from './Pages/RootLayOut';
import MenuPage from './Pages/MenuPage';



const router =createBrowserRouter(
  [
    {
      path:'/',
      element:<RootLayOut></RootLayOut>,
      children:[
        {
          index:true,element:<HomePage></HomePage>
        }
        ,
        {
          path:'Menu',element:<App></App>
        }
        ,
      ]
    }
  ]
)

//<RouterProvider router={router}></RouterProvider>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
