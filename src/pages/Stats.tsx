import { motion as m } from 'framer-motion'

const Stats = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}>Stats</m.div>
    )
}
export default Stats