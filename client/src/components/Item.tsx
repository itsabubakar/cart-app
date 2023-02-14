const Item = ({ item }: { item: string }) => {
    return (
        <div className="h-fit py-2 px-2 bg-white shadow-md rounded-lg flex w-[180px] justify-between items-center">
            <p className="font-medium text-gray-900">{item}</p>
            <button className="hover:text-[#F9A109] text-2xl text-gray-500">+</button>
        </div>
    )
}
export default Item