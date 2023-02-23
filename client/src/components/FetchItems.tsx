import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { fetchItem } from "../features/itemSlice"

const FetchItems = ({ category, data }: { category: string, data: [] }) => {
    console.log(category)

    // let filt = (data.filter(item => {
    //     // console.log(item.category)

    //     if (item.category === category) {
    //         return
    //     }
    // }))

    // console.log(filt)


    // const dispatch = useDispatch()

    // const fetchData = async (category: String) => {
    //     console.log(category);

    //     try {
    //         console.log(category);

    //         const response = await dispatch(fetchItem({ data: category })).unwrap()
    //         const data = response.payload
    //         console.log(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     fetchData(category)
    // }, [])


    return (
        <div className="h-fit py-2 px-2 bg-white shadow-md rounded-lg flex w-[180px] justify-between items-center">
            <p className="font-medium text-gray-900">{category}</p>
            <button className="hover:text-[#F9A109] text-2xl text-gray-500">+</button>
        </div>
    )
}
export default FetchItems