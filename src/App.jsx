
import './App.css'
// motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from './variants.js'

function App() {
 

  return (
    <>
    <motion.div 
      variants={fadeIn("up", 0.2)} 
      initial = "hidden" 
      whileInView={"show"} 
      viewport={{once: false, amount: 0.7}}>

      <h2>Text 1</h2>
      <h2>Text 2</h2>
      <h2>Text 3</h2>
      <h2>Text 4</h2>
      
    </motion.div>
      
      

      
      
    </>
  )
}

export default App
