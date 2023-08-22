
import './App.css'
import { SideBar } from './components/SideBar'
import {Main} from './components/Main'

function App() {

  return (
    <>
     <div className='flex'>
       <SideBar/>
       <Main/>
     </div>
    </>
  )
}

export default App
