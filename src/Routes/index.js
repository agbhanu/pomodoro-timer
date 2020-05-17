import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../Container/App'

const Routes = () => (
  <Switch>
    <Route path='/' component={App}></Route>
  </Switch>
)

export default Routes