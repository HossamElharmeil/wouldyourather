import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import TheNavBar from './components/TheNavBar'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return <>
    <TheNavBar />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => <div>Main</div>} />
        <Route exact path='/home' component={() => <div>Home</div> } />
      </Switch>
    </BrowserRouter>
    </>
}

export default App