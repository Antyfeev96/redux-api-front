import { createSlice, nanoid } from "@reduxjs/toolkit";

const list = []

const filteredList = []

const initialState = {
  name: '',
  price: '',
  editedId: null,
  filterString: '',
  list,
  filteredList
}

export const toolkitSlice = createSlice({
  name: 'myState',

  initialState,

  reducers: {
    setList(state, action) {
      if (state.list.length !== 0) return;
      state.list = action.payload;
    },
    addItem(state, action) {
      const { name, price } = action.payload;
      state.list.push({ id: nanoid(), name, price })
    },
    editItem(state, action) {
      const { name, value } = action.payload;
      state.name = name;
      state.price = value
    },
    removeItem(state, action) {
      const { id } = action.payload;
      console.log(id);
      state.list = state.list.filter(item => item.id !== id)
    },
    changeInputField(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    changeEditedId(state, action) {
      state.editedId = action.payload;
    },
    saveEditedItem(state, action) {
      const { name, price } = action.payload;
      state.list = state.list.map(item => {
        if (item.id === state.editedId) {
          item.name = name;
          item.price = price
        }
        return item;
      })
    },
    applyFilter(state, action) {
      state.filterString = action.payload.toLowerCase();
    },
    changeFilteredList(state) {
      state.filteredList = [...state.list.filter(item => item.name.toLowerCase().includes(state.filterString))];
    }
  }
})


export default toolkitSlice.reducer;
export const { addItem, editItem, removeItem, changeInputField, changeEditedId, saveEditedItem, applyFilter, changeFilteredList, setList } = toolkitSlice.actions;