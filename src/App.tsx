import './App.css'
import { HomePage } from './pages/HomePage'
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <Analytics />
      <HomePage/>
    </>
  )
}

export default App
