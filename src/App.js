
import Navbar from './navbar/Navbar'
import Routes from './rotas/routes'

import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Navbar/>
          <Routes/>
      </HashRouter>    
    </div>
  );
}

export default App;
