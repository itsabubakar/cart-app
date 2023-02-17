import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { addNewItem } from '../features/itemSlice'
import * as Yup from 'yup'


const AddNewItem = ({ newItem, setNewItem }: { newItem: boolean, setNewItem: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const dispatch = useDispatch()

    // formik logic
    const formik = useFormik({
        initialValues: {
            name: "",
            note: "",
            url: "",
            category: "",
        },
        // Validate form
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            category: Yup.string().required('Category is required'),
        }),
        // submit form
        onSubmit: (values, { resetForm }) => {
            // console.log(values)
            try {
                dispatch(addNewItem(values)).unwrap()
            } catch (error) {
                console.log(error)
            }


            // Object.values(values).forEach(item => {
            //     if (item) {
            //         console.log(item.toLowerCase())
            //     }
            // })
            // resetForm({
            //     values: {
            //         name: '',
            //         note: '',
            //         url: '',
            //         category: ''
            //     }
            // })
        },
    })


    return (
        <div className="px-6 py-8 w-[300px] sm:w-[320px] h-full bg-white">
            <h2 className=" text-xl text-gray-800 font-semibold ">Add a new item</h2>
            <form onSubmit={formik.handleSubmit}>

                {/* name */}
                <div className="flex my-2 flex-col">
                    <label className={`my-2 ${formik.touched.name && formik.errors.name ? 'text-red-500' : 'text-gray-800'} font-medium`} htmlFor="name">{formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}</label>
                    <input
                        name="name"
                        value={formik.values.name.replace(/\s+/g, ' ')}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        placeholder="Enter a name"
                        className="capitalize border-[#BDBDBD] text-sm border-2 rounded-lg px-2 py-2 outline-none focus:border-[#F9A109]"
                        type="text" />
                </div>
                {/* end of name */}

                {/* note */}
                <div className="flex my-2 flex-col">
                    <label className="my-2 text-gray-800 font-medium" htmlFor="name">Note (optional)</label>
                    <textarea
                        value={formik.values.note}
                        onChange={formik.handleChange}
                        placeholder="Enter a note"
                        className="outline-none resize-none text-sm border-2 rounded-lg px-2 py-2 border-[#BDBDBD] focus:border-[#F9A109]"
                        name="note" id="" cols={30} rows={4}></textarea>
                </div>
                {/* end of note */}

                {/* image */}
                <div className="flex my-2 flex-col">
                    <label className="my-2 text-gray-800 font-medium" htmlFor="image">Image (optional)</label>
                    <input
                        value={formik.values.url.trim()}
                        onChange={formik.handleChange}
                        name="url"
                        placeholder="Enter a url"
                        className="outline-none text-sm border-2 border-[#BDBDBD] rounded-lg px-2 py-2 focus:border-[#F9A109]"
                        type="text" />
                </div>
                {/* end of image */}

                {/* category */}
                <div className="flex my-2 flex-col">
                    <label className={`my-2 ${formik.touched.category && formik.errors.category ? 'text-red-500' : 'text-gray-800'} font-medium`} htmlFor="name">{formik.touched.category && formik.errors.category ? formik.errors.category : "Category"}</label>
                    <input
                        value={formik.values.category.replace(/\s+/g, ' ')}
                        onChange={formik.handleChange}
                        name="category"
                        placeholder="Enter a category"
                        className="capitalize border-[#BDBDBD] text-sm border-2 rounded-lg px-2 py-2 outline-none focus:border-[#F9A109]"
                        type="text" />
                </div>
                {/* end of category */}

                <div className="flex justify-center gap-5 mt-8">
                    <button onClick={() => setNewItem(!newItem)} className="font-medium hover:text-[#F9A109]">cancel</button>
                    <button type="submit" className="font-medium bg-[#F9A109] text-white py-2 px-2 rounded-md hover:text-black">Save</button>
                </div>

            </form>
        </div>
    )
}
export default AddNewItem