import Cart from "../assets/icons/Cart"

const NoItems = () => {
    return (
        <div className="flex flex-col items-center h-full">
            <p className="mt-[38%] mb-[35%] text-center font-semibold text-gray-800">No Items</p>
            <Cart />
        </div>
    )
}
export default NoItems