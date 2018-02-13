import { combineReducers } from 'redux'
import todos from './reducers/todos'
import user from './reducers/user'
import observations from './reducers/observations'

const rootReducer = combineReducers({
  todos,
  user,
  observations,
})

export default rootReducer
