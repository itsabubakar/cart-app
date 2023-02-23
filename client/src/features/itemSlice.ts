import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const ITEMS_URL = 'http://localhost:8080/api/item'

const initialState = {
    items: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

// fetches the category
export const fetchItems: any = createAsyncThunk('items/fetchItems', async () => {
    try {
        const response = await axios.get(ITEMS_URL)
        return response.data
    } catch (error: any) {
        throw Error(error.response.data)
    }
})

// fetches item for that category
export const fetchItem: any = createAsyncThunk('items/fetchItem', async (category) => {
    try {
        const response = await axios.post(`${ITEMS_URL}/items`, category)
        return response.data
    } catch (error: any) {
        throw Error(error.response.data)
    }
})

export const addNewItem: any = createAsyncThunk('items/addNewItem', async (item) => {
    // console.log(item)
    // console.log('Slice connected')
    try {
        const response = await axios.post(ITEMS_URL, item)
        return response.data
    } catch (error: any) {
        throw Error(error.response.data)
    }

})
export const updateItem = createAsyncThunk('items/updateItem', async (item: { id: string }) => {
    const { id } = item
    try {
        const response = await axios.put(`${ITEMS_URL}/${id}`, item)
        return response.data
    } catch (err) {
        //return err.message;
        console.log(err)
        return item; // only for testing Redux!
    }
})

export const deleteItem = createAsyncThunk('items/deleteItem', async (item: { id: string }) => {
    const { id } = item;
    try {
        const response = await axios.delete(`${ITEMS_URL}/${id}`)
        if (response?.status === 200) return item;
        return `${response?.status}: ${response?.statusText}`;
    } catch (err: any) {
        return err.message;
    }
})

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchItems.pending, (state, action) => {
                state.status = 'loading'
            })

            .addCase(fetchItems.fulfilled, (state, action) => {
                state.status = 'succeeded'
            })

            .addCase(fetchItems.rejected, (state: any, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(addNewItem.fulfilled, (state, action) => {
                state.status = 'succeeded'
            })
            .addCase(updateItem.fulfilled, (state: any, action) => {
                if (!action.payload?.id) {
                    console.log('Update could not complete')
                    console.log(action.payload)
                    return;
                }
                const { id } = action.payload;
                action.payload.date = new Date().toISOString();
                const items = state.items.filter((item: { id: any }) => item.id !== id);
                state.items = [...items, action.payload];
            })
            .addCase(deleteItem.fulfilled, (state: any, action) => {
                if (!action.payload?.id) {
                    console.log('Delete could not complete')
                    console.log(action.payload)
                    return;
                }
                const { id } = action.payload;
                const items = state.items.filter((item: { id: any }) => item.id !== id);
                state.items = items;
            })
    }
})


export const selectAllItems = (state: { items: { items: any } }) => state.items.items;
export const getItemStatus = (state: { items: { status: any } }) => state.items.status;
export const getItemError = (state: { items: { error: any } }) => state.items.error;


export default itemSlice.reducer