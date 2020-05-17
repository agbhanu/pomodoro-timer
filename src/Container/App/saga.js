import createSagaMiddleware from 'redux-saga'
import {call} from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield call(console.log,"Root Saga Started")
}

export const startSaga = () => {
  sagaMiddleware.run(rootSaga)
}

export default sagaMiddleware