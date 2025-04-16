import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Rotas } from "./components/Rotas/Rotas"

function App() {

  return (
// tags fantasmas: são as tagas vazias a ponto de persistir a renderização de dois
// ou mais elementos HTML no mesmo componente
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  )
}

// para garantir que a função seja chamada em outros elementos nós devemos "exporta-la"
export default App