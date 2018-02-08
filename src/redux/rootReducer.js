import { combineReducers } from 'redux'
import todos from './reducers/todos'
import user from './reducers/user'
import kinteract from './reducers/kinteract'

const rootReducer = combineReducers({
  todos,
  user,
  kinteract,
})

export default rootReducer
