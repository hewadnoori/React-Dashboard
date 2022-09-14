import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex:'1000'}}>
            <TooltipComponent content="Settings" position='Top'>
              <button>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
