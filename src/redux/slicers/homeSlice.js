import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../utils/constants";

const homeSLice = createSlice({
    name: 'home',
    initialState: {
        mainData: data,
        favorite: data,
        value: 'goods',
        inputValue: '',
        filteredMainData: data,
        sortingValue: 'Default',
        modal: false
    },
    reducers: {
        favoriteCart(state, action) {
            const indexToFavorite = data.findIndex(item => item.id === action.payload.id)
            const fav = state.favorite[indexToFavorite].select;
            state.favorite[indexToFavorite].select = !fav
        },
        handleCategoryValue(state, action) {
            if (action.payload === 'goods') {
                return {
                    ...state, mainData: data,
                    value: action.payload,
                    filteredMainData: data
                }
            } else {
                state.mainData = data.filter(el => el.category === action.payload)
                state.value = action.payload
                state.filteredMainData = data.filter(el => el.category === action.payload)
            }
        },
        handleInputValue(state, action) {
            return { ...state, inputValue: action.payload }
        },
        inputData(state) {
            if (!state.inputValue) {
                state.mainData = state.filteredMainData
            } else {
                state.mainData = state.filteredMainData.filter(el => el.name.toLowerCase().includes(state.inputValue.toLowerCase()))
            }
        },
        handleSortingValue(state, action) {
            state.sortingValue = action.payload
            if (action.payload === 'Price increase') {
                state.mainData = [...state.mainData].sort((a, b) => a.price - b.price)
            } else if (action.payload === 'Price descending') {
                state.mainData = [...state.mainData].sort((a, b) => b.price - a.price)
            } else if (action.payload === 'Z-A') {
                state.mainData = [...state.mainData].sort((a, b) => { if (b.name < a.name) { return -1 } else { return 1 } })
            } else if (action.payload === 'A-Z') {
                state.mainData = [...state.mainData].sort((a, b) => { if (a.name > b.name) { return 1 } else { return -1 } })
            } else {
                if (state.value === 'goods') {
                    state.filteredMainData = data
                }
                state.mainData = state.filteredMainData
            }
        },
        handleModal(state) {
            state.modal = !state.modal
        }
    }
})

export const { handleModal, inputData, favoriteCart, handleCategoryValue, handleInputValue, handleSortingValue } = homeSLice.actions
export default homeSLice.reducer


