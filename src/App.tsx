import CryptoSearchForm from './components/CryptoSearchForm'
import './index.css'

function App() {
  return (
    <>
      <div className="container">
        <h1 className='app-title'>
          Cotizador de <span> criptomonedas</span>
        </h1>
        <div className="content">
          <CryptoSearchForm />
        </div>
      </div>
    </>
  )
}

export default App
