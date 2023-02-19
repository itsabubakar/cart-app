import Item from "./components/Item"
import { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import { useDispatch } from "react-redux"
import { fetchItems } from "./features/itemSlice"


const App = () => {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])
  const [data, setData] = useState([])


  const fetchData = async () => {
    try {
      const response = await dispatch(fetchItems())
      console.log(response.payload)
      setData(response.payload)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <m.main
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-x-auto scroll-bar">
      <h1 className="mt-5 text-2xl font-semibold text-gray-800"><span className="text-[#F9A109]">Shoppingify</span> allows you take your shopping list wherever you go</h1>

      <div className="py-10 w-full">
        {/* items display */}
        <div className="mb-10">
          <h2 className="font-semibold text-gray-800">Fruit and vegetables</h2>
          <div className="container mt-5 gap-6 grid grid-cols-4">
            <Item item={'Avocado'} />
            <Item item={'Bunch of carrots 5pcs'} />
            <Item item={'Piele De Sapo Melon'} />
            <Item item={'Pre-cooked corn 450g'} />
            <Item item={'Avocado'} />
            <Item item={'Bunch of carrots 5pcs'} />
            <Item item={'Piele De Sapo Melon'} />
            <Item item={'Pre-cooked corn 450g'} />
          </div>
        </div>
        {/* end of items display */}

        {/* items display */}
        <div className="mb-10">
          <h2 className="font-semibold text-gray-800">Meat and Fishs</h2>
          <div className="container mt-5 gap-5 grid grid-cols-4">
            <Item item={'Chicken leg box'} />
            <Item item={'Chicken 1kg'} />
            <Item item={'Pork fillets 450g'} />
            <Item item={'Salmon 1kg'} />
          </div>
        </div>
        {/* end of items display */}

        {/* items display */}
        <div className="mb-10">
          <h2 className="font-semibold text-gray-800">Beverages</h2>
          <div className="container mt-5 gap-5 grid grid-cols-4">
            <Item item={'Chicken leg box'} />
            <Item item={'Chicken 1kg'} />
            <Item item={'Pork fillets 450g'} />
            <Item item={'Salmon 1kg'} />
            <Item item={'Avocado'} />
            <Item item={'Bunch of carrots 5pcs'} />
            <Item item={'Piele De Sapo Melon'} />
            <Item item={'Pre-cooked corn 450g'} />
          </div>
        </div>
        {/* end of items display */}

        {/* items display */}
        <div className="mb-10">
          <h2 className="font-semibold text-gray-800">Pets</h2>
          <div className="container mt-5 gap-5 grid grid-cols-4">
            <Item item={'Chicken leg box'} />
            <Item item={'Chicken 1kg'} />
            <Item item={'Pork fillets 450g'} />
            <Item item={'Salmon 1kg'} />
            <Item item={'Avocado'} />
            <Item item={'Bunch of carrots 5pcs'} />
            <Item item={'Piele De Sapo Melon'} />
            <Item item={'Pre-cooked corn 450g'} />
          </div>
        </div>
        {/* end of items display */}
      </div>




    </m.main>
  )
}

export default App