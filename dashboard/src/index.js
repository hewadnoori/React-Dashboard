import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
//creates a root element for rendering the website. createRoot is a new API in React 18 that allows you to create a root element to render your app into. Here, the root element is specified as the DOM element with the ID root.
const root = ReactDOM.createRoot(document.getElementById('root'));
//renders the website inside the root element. The render method is called on the root object, and the website is rendered using JSX, a syntax extension for JavaScript that allows you to write HTML-like syntax for React components. 
root.render(
    //Here, the website is wrapped in a StrictMode component, which enables additional checks and warnings for potential problems in the code. The ContextProvider component is used to provide global state to the components of the website, and the App component is the main component of the website that will be rendered.
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);


