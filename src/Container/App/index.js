import React from 'react'
import { startSaga } from './saga'

const App = () => (
  <>
    APP
  </>
)

export default () => {
  startSaga();
  return <App />;
}