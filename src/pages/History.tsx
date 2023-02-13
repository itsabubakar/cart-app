import { motion as m } from 'framer-motion'
const History = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >History</m.div>
    )
}
export default History