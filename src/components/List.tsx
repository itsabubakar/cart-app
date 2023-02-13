import { HiPencil } from 'react-icons/hi'

const List = () => {
    return (
        <div>
            <div className="py-5 flex justify-between">
                {/* name of list */}
                <h2 className="text-gray-800 font-semibold text-2xl">Shopping List</h2>
                <button><HiPencil /></button>
            </div>

            {/* items in list */}
            <div>

                {/* category */}
                <div className='flex flex-col gap-y-3'>
                    <h3 className='text-sm text-gray-500 font-semibold mt-6 mb-4'>Fruit and vegetables</h3>
                    <div className='flex justify-between'>
                        <p className='font-medium text-sm'>Acocado</p>
                        <button className=' border-[2px] border-[#F9A109] rounded-xl text-[#F9A109] px-2 py-1 text-[12px]'>3 pcs</button>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-medium text-sm'>Pre-cooked corn 450g</p>
                        <button className=' border-[2px] border-[#F9A109] rounded-xl text-[#F9A109] px-2 py-1 text-[12px]'>3 pcs</button>
                    </div>
                </div>
                {/* end of category */}

                {/* category */}
                <div className='flex flex-col gap-y-3'>
                    <h3 className='text-sm text-gray-500 font-semibold mt-6 mb-4'>Beverages</h3>
                    <div className='flex justify-between'>
                        <p className='font-medium text-sm'>Acocado</p>
                        <button className=' border-[2px] border-[#F9A109] rounded-xl text-[#F9A109] px-2 py-1 text-[12px]'>3 pcs</button>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-medium text-sm'>Pre-cooked corn 450g</p>
                        <button className=' border-[2px] border-[#F9A109] rounded-xl text-[#F9A109] px-2 py-1 text-[12px]'>3 pcs</button>
                    </div>
                </div>
                {/* end of category */}

                {/* category */}
                <div className='flex flex-col gap-y-3'>
                    <h3 className='text-sm text-gray-500 font-semibold mt-6 mb-4'>Meat and Fish</h3>
                    <div className='flex justify-between'>
                        <p className='font-medium text-sm'>Acocado</p>
                        <button className=' border-[2px] border-[#F9A109] rounded-xl text-[#F9A109] px-2 py-1 text-[12px]'>3 pcs</button>
                    </div>

                    <div className='flex justify-between'>
                        <p className='font-medium text-sm'>Pre-cooked corn 450g</p>
                        <button className=' border-[2px] border-[#F9A109] rounded-xl text-[#F9A109] px-2 py-1 text-[12px]'>3 pcs</button>
                    </div>

                    <div className='flex justify-between'>
                        <p className='font-medium text-sm'>Pre-cooked corn 450g</p>
                        <button className=' border-[2px] border-[#F9A109] rounded-xl text-[#F9A109] px-2 py-1 text-[12px]'>3 pcs</button>
                    </div>

                    <div className='flex justify-between'>
                        <p className='font-medium text-sm'>Pre-cooked corn 450g</p>
                        <button className=' border-[2px] border-[#F9A109] rounded-xl text-[#F9A109] px-2 py-1 text-[12px]'>3 pcs</button>
                    </div>

                </div>
                {/* end of category */}

            </div>
            {/* end of items in list */}

        </div>
    )
}
export default List