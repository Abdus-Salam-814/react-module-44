import './App.css'
import BestPrices from './best-prices/BestPrices'
import NaveBar from './nave-bar/NaveBar'

function App() {


  return (
    <>
   <div className='container mx-auto p-6'>
   <NaveBar></NaveBar>
   <BestPrices></BestPrices>
   </div>
    </>
  )
}

export default App
