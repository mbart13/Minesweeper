import React from 'react';
import MineField from "./components/mine-field.component/mine-field.component";
import ControlPanel from "./components/control-panel.component/control-panel.component";
import {useGlobalContext} from "./context";

function App() {
    const { board, flagCounter } = useGlobalContext();

    return (
      <main>
        <section className='minesweeper'>
            <ControlPanel flagCounter={flagCounter} />
            <MineField board={board} />
        </section>
      </main>
      );
    }

export default App;
