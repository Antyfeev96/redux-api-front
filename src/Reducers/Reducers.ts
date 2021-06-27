import { createSlice, nanoid } from "@reduxjs/toolkit";

interface IItem {
  id: string,
  name: string,
  price: number
}

interface IInputNames {
  name: string,
  price: string,
}

type IState = {
    name: string,
    price: string,
    editedId: null | string,
    filterString: string,
    list: IItem[],
    filteredList: IItem[]
}

const list: IItem[] = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
]

const filteredList: IItem[] = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
]

const initialState: IState = {
  name: '',
  price: '',
  editedId: null,
  filterString: '',
  list,
  filteredList
}

type Action = {
  payload: {
    name: string,
    price: number,
    id: string
  }
}

type InputAction = {
  payload: {
    name: keyof IInputNames,
    value: string,
  }
}

export const toolkitSlice = createSlice({
  name: 'myState',

  initialState,

  reducers: {
    addItem(state: IState, action: Action) {
      const { name, price } = action.payload;
      state.list.push({ id: nanoid(), name, price })
    },
    editItem(state: IState, action: InputAction) {
      const { name, value } = action.payload;
      state.name = name;
      state.price = value
    },
    removeItem(state: IState, action: Action) {
      const { id } = action.payload;
      console.log(id);
      state.list = state.list.filter(item => item.id !== id)
    },
    changeInputField(state: IState, action: InputAction) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    changeEditedId(state: IState, action) {
      state.editedId = action.payload;
    },
    saveEditedItem(state: IState, action: Action) {
      const { name, price } = action.payload;
      state.list = state.list.map(item => {
        if (item.id === state.editedId) {
          item.name = name;
          item.price = price
        }
        return item;
      })
    },
    applyFilter(state: IState, action) {
      state.filterString = action.payload.toLowerCase();
    },
    changeFilteredList(state: IState) {
      state.filteredList = [...state.list.filter(item => item.name.toLowerCase().includes(state.filterString))];
    }
  }
})


export default toolkitSlice.reducer;
export const { addItem, editItem, removeItem, changeInputField, changeEditedId, saveEditedItem, applyFilter, changeFilteredList } = toolkitSlice.actions;