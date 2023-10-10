import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
<h1 className='text-center text-2xl text-black'>redux</h1>
<div>
  <AddTodo/>
  <Todos/>
</div>

    </>
  )
}

export default App
