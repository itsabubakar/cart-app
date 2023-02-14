import { useState } from 'react'
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Cart from "../components/Cart"

const Rootlayout = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <main className="overflow-hidden flex relative bg-[#FAFAFE] h-screen">
            <Sidebar toggle={toggle} setToggle={setToggle} />
            <Outlet />
            <Cart toggle={toggle} />
        </main>
    )
}
export default Rootlayout