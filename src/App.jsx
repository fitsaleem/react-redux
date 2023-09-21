import './App.css'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Card from './pages/Card'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
     <Navbar/>
     <Routes>
<Route  path="/" element={<Home/>} />
 <Route   path="/card" element={<Card/>} />
     </Routes>
     </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
