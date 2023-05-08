import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-amber-950 text-center text-white font-bold text-xl p-4'>
        <p>Espresso Emporium</p>
      </div>
      <Link to={'/addCoffee'}>Add coffee</Link>
    </>
  )
}

export default App
