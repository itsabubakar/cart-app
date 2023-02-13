import Item from "./components/Item"
import { motion as m } from 'framer-motion'


const App = () => {
  return (
    <m.main
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-center">
      <div className="container mt-5 gap-5 grid grid-cols-4">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </m.main>
  )
}

export default App