import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from "react-router"
import List from "@pages/List.jsx"
import Select from "@pages/Select.jsx"
import Create from "@pages/Create.jsx"

const App = () =>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/select' element={<Select />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>

export default App
