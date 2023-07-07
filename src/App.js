import './input.css';
import {DonoComponent} from './components/dono-component'
import { DonoFrame } from './components/dono-frame';
import { DonoForm } from './components/dono-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="h-screen bg-gradient-to-b from-slate-900 to-slate-500 flex-row">
          <div>
            <DonoComponent/>
          </div>
          <div className='flex flex-col'>
            <DonoFrame/>
          </div>
          <div>
            <DonoForm/>
          </div>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
