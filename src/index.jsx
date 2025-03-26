import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoApp from './todoApp.jsx'


/*import AppByYear from './AppByYear.jsx' */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoApp/>
  </StrictMode>,
)
