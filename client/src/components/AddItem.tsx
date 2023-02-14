const AddItem = () => {
    return (
        <div className="ml-auto mr-auto rounded-md pl-2 w-fit border-2 border-[#F9A109]">
            <input
                placeholder="Enter an item"
                className="h-full outline-none"
                type="text" />
            <button className="h-full bg-[#F9A109] text-white py-2 px-4 hover:text-[black]">Save</button>
        </div>
    )
}
export default AddItem