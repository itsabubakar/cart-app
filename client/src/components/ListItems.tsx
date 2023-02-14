import { MdNavigateNext } from 'react-icons/md'

const ListItems = () => {
    return (
        <div className='mt-3 flex shadow bg-white rounded-md py-2 px-2 gap-8'>
            <p>Grocery List</p>
            {/* date */}
            <div className='ml-auto'>
                <p>Mon 27.8.2020</p>
            </div>
            <p>completed</p>
            <button><MdNavigateNext /></button>
        </div>
    )
}
export default ListItems