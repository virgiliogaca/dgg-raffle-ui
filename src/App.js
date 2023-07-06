import './input.css';
import {DonoComponent} from './components/dono-component'
import { DonoFrame } from './components/dono-frame';
import { DonoForm } from './components/dono-form';

function App() {
  return (
    <div className="App">
      <header className="h-screen bg-gradient-to-b from-slate-900 to-slate-500 flex-row">
        <div>
          <DonoComponent/>
        </div>
        <div>
          <DonoFrame/>
        </div>
        <div>
          <DonoForm/>
        </div>
      </header>
    </div>
  );
}

export default App;
