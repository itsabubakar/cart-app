import Logo from "../assets/icons/Logo"
import { TfiMenuAlt } from 'react-icons/tfi'
import { VscHistory } from 'react-icons/vsc'
import { AiOutlineBarChart } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, NavLink } from "react-router-dom"

const Sidebar = ({ toggle, setToggle }: { toggle: boolean, setToggle: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="bg-white w-[70px] py-10 flex flex-col justify-between">
            <div className="flex justify-center">
                <Logo />
            </div>
            <div className="flex flex-col gap-12">
                {/* Items link */}
                <NavLink to="/" className="flex relative items-center  justify-center">
                    <div className="hidden-link"><TfiMenuAlt size={20} /></div>
                    <div className="absolute left-20 hidden-link-item">
                        <p className="thought-box">Items</p>
                    </div>
                </NavLink>

                {/* history link */}
                <NavLink to="history" className="flex relative items-center  justify-center">
                    <div className="hidden-link"><VscHistory size={23} /></div>
                    <div className="absolute left-20 hidden-link-item">
                        <p className="thought-box">History</p>
                    </div>
                </NavLink>

                {/* stats link */}
                <NavLink to="stats" className="flex relative items-center  justify-center">
                    <div className="hidden-link"><AiOutlineBarChart size={23} /></div>
                    <div className="absolute left-20 hidden-link-item">
                        <p className="thought-box">Charts</p>
                    </div>
                </NavLink>
            </div>
            <div className="flex justify-center">
                <button onClick={handleToggle} className="bg-[#F9A109] pl-2 pr-2.5 py-2 rounded-full hover:bg-[#454545]"><AiOutlineShoppingCart color="#fff" size={23} /></button>
                <small className="px-1.5 rounded -ml-3 h-fit bg-red-500 text-white">3</small>
            </div>
        </div>
    )
}
export default Sidebar