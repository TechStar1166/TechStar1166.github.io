import React from 'react'
import General from './containers/General'
import CCL1A from './containers/CCL1A'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import { TodoList } from './containers/TodoList'
import theme from './theme'
import UserName from './containers/Home/username'
import { useState } from 'react'
import FormInput from './containers/TodoList/components/FormInput'
import { BG } from './styles'


// const userName = "Guest"
// const [userName, setUserName] = useState("Guest")

const App = () => {
  return(
    <BrowserRouter basename="/todo">
      <ThemeProvider theme={theme}>
        <BG>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/list" component={TodoList}/>
            <Route path="/GCD" component={General}/>
            <Route path="/CCL1A" component={CCL1A}/>
          </Switch>
        </div>
        </BG>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App