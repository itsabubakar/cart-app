import { useState } from "react"
import Bottle from "../assets/icons/Bottle"
import AddItem from "./AddItem"
import List from "./List"
import NoItems from "./NoItems"
import AddNewItem from "./AddNewItem"

const Cart = ({ toggle }: { toggle: boolean }) => {
    const [newItem, setNewItem] = useState(false)
    return (
        <div className={`flex flex-col h-full ml-auto ease-in-out duration-200 absolute ${toggle ? 'right-0' : 'absolute -right-[100%]'}`}>
            {newItem ? <AddNewItem setNewItem={setNewItem} newItem={newItem} /> : <div className="overflow-y-scroll">
                <div className={`bg-[#FFF0DE] h-[86%] px-8 py-8 w-[300px] sm:w-[320px] overflow-y-scroll`}>
                    <div>
                        {/* bottle and add items section */}
                        <div className="bg-[#80485B] flex rounded-lg gap-5 px-2 py-4">
                            <div className="-mt-6">
                                <Bottle />
                            </div>

                            <div>
                                <p className="text-white font-semibold">Didn't find what you need?</p>
                                <button
                                    onClick={() => setNewItem(!newItem)}
                                    className="mt-2 bg-white text-black py-1 px-3 text-sm rounded-md hover:bg-[#454545] hover:text-white">Add item</button>
                            </div>
                        </div>
                        {/* end of bottle and add items section */}
                        <List />
                    </div>

                    {/* No Items section */}
                    {/* <NoItems /> */}
                    {/*end of No  Items section */}

                </div>
                <AddItem />
            </div>}

        </div>
    )
}
export default Cart