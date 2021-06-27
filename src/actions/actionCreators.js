import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, CHANGE_INPUT_FIELD, CHANGE_EDITED_ID, SAVE_EDITED_ITEM } from './actionTypes';

export function addItem (name, price) {
  return { type: ADD_ITEM, payload: { name, price } };
}

export function editItem (name, price) {
  return { type: EDIT_ITEM, payload: { name, price } };
}

export function saveEditedItem (name, value, editedId) {
  return { type: SAVE_EDITED_ITEM, payload: { name, value, editedId } };
}

export function removeItem (id) {
  return { type: REMOVE_ITEM, payload: { id } };
}

export function changeInputField (name, value) {
  return { type: CHANGE_INPUT_FIELD, payload: { name, value } }
}

export function changeEditedId (editedId) {
  return { type: CHANGE_EDITED_ID, payload: { editedId } };
}