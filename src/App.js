import React from 'react';
import ShowHelpModal from './components/modal/modal.component'
import Minesweeper from './pages/minesweeper/minesweeper.component';

function App() {

    return (
      <div className="container">
        <ShowHelpModal/>
        <Minesweeper />
      </div>
      );
    }

export default App;
