import { MdNavigateNext } from 'react-icons/md'

const ListItems = () => {
    return (
        <div className='mt-6 flex shadow bg-white rounded-md py-3 px-3 gap-5 items-center'>
            <p className='font-medium'>Grocery List</p>
            {/* date */}
            <div className='ml-auto'>
                <p className='text-[12px] text-gray-500'>Mon 27.8.2020</p>
            </div>
            <p className='text-[#56CCF2] border border-[#56CCF2] text-[10px] rounded-md p-1'>completed</p>
            <button className='text-[#F9A109] hover:text-gray-700'><MdNavigateNext size={25} /></button>
        </div>
    )
}
export default ListItems