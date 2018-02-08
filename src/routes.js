import Landing from './components/landing'
import ReactTasks from './components/reactTasks'
import ImportExportTasks from './components/importExportTasks'
import TodoList from './containers/todoList'
import KinteractLogin from './containers/kinteractLogin'

export const routes = [
  { path: '/', component: Landing, exact: true },
  { path: '/reactTasks', component: ReactTasks, exact: false },
  { path: '/importExportTasks', component: ImportExportTasks, exact: false },
  { path: '/todoList', component: TodoList, exact: false },
  { path: '/login', component: KinteractLogin, exact: false },
]
