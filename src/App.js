import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import TheNavBar from './components/TheNavBar'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import NewQuestion from './components/NewQuestion'
import Leaderboard from './components/Leaderboard';

function App() {
  return <>
    <TheNavBar />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/new' component={NewQuestion} />
        <Route exact path='/leaderboard' component={Leaderboard} />
      </Switch>
    </BrowserRouter>
    </>
}

export default App