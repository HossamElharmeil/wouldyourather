import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import TheNavBar from './components/TheNavBar'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import NewQuestion from './components/NewQuestion'
import Leaderboard from './components/Leaderboard'
import store from './redux/store'
import { Provider } from 'react-redux'
import Login from './components/Login'

function App() {
  return <>
    <Provider store={store}>
      <BrowserRouter>
        <TheNavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/new' component={NewQuestion} />
          <Route exact path='/leaderboard' component={Leaderboard} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
    </>
}

export default App