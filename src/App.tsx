
import './App.css';
import Dashboard from './Pages/Dashboard';
import Sidebar from './Components/sidebar';

function App() {
  return (
    <div className="flex bg-bodyBg" >
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;
