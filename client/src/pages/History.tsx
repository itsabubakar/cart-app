import { motion as m } from 'framer-motion'
import ListItems from '../components/ListItems'
const History = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='w-[60%]'
        >
            <div className='py-5 w-full'>
                <h2 className='text-xl font-semibold text-gray-800'>Shopping history</h2>


                <div className='mt-6 w-full'>
                    {/* lists */}
                    <div>
                        {/* month */}
                        <small className='font-semibold textgray-800'>August 2020</small>
                        <ListItems />
                        <ListItems />
                    </div>
                    {/* end of lists */}
                </div>

                <div className='mt-6 w-full'>
                    {/* lists */}
                    <div>
                        {/* month */}
                        <small className='font-semibold textgray-800'>August 2020</small>
                        <ListItems />
                        <ListItems />
                    </div>
                    {/* end of lists */}
                </div>
            </div>
        </m.div>
    )
}
export default History