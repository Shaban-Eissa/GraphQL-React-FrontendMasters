import { Switch, Route } from 'react-router-dom'
import React, {Fragment} from 'react'
import Pets from '../pages/Pets'

const App = () => (
  <Fragment>
    <div>
      <Switch>
        <Route exact path="/" component={Pets} />
      </Switch>
    </div>
  </Fragment>
)

export default App
