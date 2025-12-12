import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Prodotti from "./pages/Prodotti"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from './layout/DefaultLayout'
import SingoloProdotto from './pages/SingoloProdotto'
import { BudgetProvider } from './context/BUdgetContext'

function App() {

  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Prodotti' element={<Prodotti />} />
              <Route path="/Prodotti/:id" element={<SingoloProdotto />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  )
}

export default App
