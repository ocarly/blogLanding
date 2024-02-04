import { useState } from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { BlogPosts } from "./BlogPosts";
import './App.css';
import { Root } from "./Root";
import Footer from './Footer'; // replace with your actual import

function App() {
 const [count, setCount] = useState(0); // Initialize count state variable
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<Root/>}>
        <Route index element={<BlogPosts/>}/>

      </Route>
  )
  );
  return (
    <>
      <RouterProvider router={router}>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <Footer />
      </RouterProvider>
    </>
  );
}

export default App;
