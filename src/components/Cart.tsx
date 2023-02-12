import Bottle from "../assets/icons/Bottle"
import AddItem from "./AddItem"
import NoItems from "./NoItems"

const Cart = ({ toggle }: { toggle: boolean }) => {
    return (
        <div className={`flex flex-col h-full ml-auto ease-in-out duration-200 absolute ${toggle ? 'right-0' : 'absolute -right-[100%]'}`}>
            <div className="bg-[#FFF0DE] h-[86%] px-5 py-8 w-[300px] sm:w-[320px]">

                {/* bottle and add items section */}
                <div className="bg-[#80485B] flex rounded-lg gap-5 px-2 py-4">
                    <div className="-mt-6">
                        <Bottle />
                    </div>

                    <div>
                        <p className="text-white font-semibold">Didn't find what you need?</p>
                        <button className="mt-2 bg-white text-black py-1 px-3 text-sm rounded-md hover:bg-[#454545] hover:text-white">Add item</button>
                    </div>
                </div>
                {/* end of bottle and add items section */}

                {/* Items section */}
                <NoItems />
                {/*end  Items section */}

            </div>
            <AddItem />
        </div>
    )
}
export default Cart