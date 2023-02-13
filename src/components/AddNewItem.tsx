const AddNewItem = ({ newItem, setNewItem }: { newItem: boolean, setNewItem: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className="px-6 py-8 w-[300px] sm:w-[320px] h-full">
            <h2 className=" text-xl text-gray-800 font-semibold ">Add a new item</h2>
            <form>

                {/* name */}
                <div className="flex my-2 flex-col">
                    <label className="my-2 text-gray-800 font-medium" htmlFor="name">Name</label>
                    <input
                        placeholder="Enter a name"
                        className="border-[#BDBDBD] text-sm border-2 rounded-lg px-2 py-2"
                        type="text" />
                </div>
                {/* end of name */}

                {/* note */}
                <div className="flex my-2 flex-col">
                    <label className="my-2 text-gray-800 font-medium" htmlFor="name">Note (optional)</label>
                    <textarea
                        placeholder="Enter a note"
                        className="resize-none text-sm border-2 rounded-lg px-2 py-2 border-[#BDBDBD]"
                        name="note" id="" cols={30} rows={4}></textarea>
                </div>
                {/* end of note */}

                {/* image */}
                <div className="flex my-2 flex-col">
                    <label className="my-2 text-gray-800 font-medium" htmlFor="image">Image (optional)</label>
                    <input
                        placeholder="Enter a url"
                        className="text-sm border-2 border-[#BDBDBD] rounded-lg px-2 py-2"
                        type="text" />
                </div>
                {/* end of image */}

                {/* image */}
                <div className="flex my-2 flex-col">
                    <label className="my-2 text-gray-800 font-medium" htmlFor="category">Category</label>
                    <select
                        name='category'
                        className='border-2 border-[#BDBDBD] p-2 rounded-md bg-white'>
                        <option>Fruits</option>
                        <option>Meat and Fish</option>
                        <option>Beverages</option>
                    </select>
                </div>
                {/* end of image */}

                <div className="flex justify-center gap-5 mt-8">
                    <button onClick={() => setNewItem(!newItem)} className="font-medium hover:text-[#F9A109]">cancel</button>
                    <button type="submit" className="font-medium bg-[#F9A109] text-white py-2 px-2 rounded-md hover:text-black">Save</button>
                </div>

            </form>
        </div>
    )
}
export default AddNewItem