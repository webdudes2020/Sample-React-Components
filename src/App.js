import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Pages/home';
import ContactMe from './Components/Pages/contactMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route component={Home} path='/home'></Route>
          <Route component={ContactMe} path='/contactMe'></Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
