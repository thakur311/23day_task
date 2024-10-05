import './App.css'
import Productdisplay from './Components/Productdisplay'
import { allproduct } from './Utilis/Product'

function App() {
  

  return (
    <>
    <Productdisplay allproduct={allproduct}/> 
    </>
  )
}

export default App