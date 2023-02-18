import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const ITEMS_URL = 'http://localhost:8080/api/item'

const initialState = {
    items: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const response = await axios.get(ITEMS_URL)
    console.log(response.data)
    return response.data
})

export const addNewItem = createAsyncThunk('items/addNewItem', async (item) => {
    // console.log(item)
    // console.log('Slice connected')
    try {
        const response = await axios.post(ITEMS_URL, item)
        return response.data
    } catch (error) {
        throw Error(error.response.data)
    }

})
export const updateItem = createAsyncThunk('items/updateItem', async (item) => {
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

export const deleteItem = createAsyncThunk('items/deleteItem', async (item) => {
    const { id } = item;
    try {
        const response = await axios.delete(`${ITEMS_URL}/${id}`)
        if (response?.status === 200) return item;
        return `${response?.status}: ${response?.statusText}`;
    } catch (err) {
        return err.message;
    }
})

const itemSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchItems.pending, (state, action) => {
                state.status = 'loading'
            })

            .addCase(fetchItems.fulfilled, (state, action) => {
                state.status = 'succeeded'
            })

            .addCase(fetchItems.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(addNewItem.fulfilled, (state, action) => {
                state.status = 'succeeded'
            })
            .addCase(updateItem.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log('Update could not complete')
                    console.log(action.payload)
                    return;
                }
                const { id } = action.payload;
                action.payload.date = new Date().toISOString();
                const items = state.items.filter(item => item.id !== id);
                state.items = [...items, action.payload];
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log('Delete could not complete')
                    console.log(action.payload)
                    return;
                }
                const { id } = action.payload;
                const items = state.items.filter(item => item.id !== id);
                state.items = items;
            })
    }
})


export const selectAllItems = (state) => state.items.items;
export const getItemStatus = (state) => state.items.status;
export const getItemError = (state) => state.items.error;

// export const { postAdded, reactionAdded } = postsSlice.actions

export default itemSlice.reducer