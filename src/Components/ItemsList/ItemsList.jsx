import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import {editItem, changeEditedId, removeItem, setList} from '../../Reducers/Reducers';
import React from "react";
import API from "../../API";

const api = new API();

const List = styled.ul`
  margin-top: 25px;
  padding: 15px;
  border: 1px solid black;
  border-radius: 5px;

  & .item:nth-of-type(n + 2) {
    margin-top: 15px;
  }

  & .item {
    button {
      margin-left: 15px;
    }
  }
`

export default function ItemsList() {
  const state = useSelector(state => state.myState);
  const dispatch = useDispatch();
  api.fetchItems().then(value => {
    dispatch(setList(value))
  });


  const handleEdit = (name, value, id) => {
    dispatch(editItem({ name, value }));
    dispatch(changeEditedId(id))
  }

  const handleRemove = id => {
    dispatch(removeItem(id));
  }

  return (
   <List>
     {state.list.map(item =>
        <li key={item.id} className="item">
        {item.name} {item.price} <span>₽</span> 
        <button onClick={() => handleEdit(item.name, item.price, item.id)}>✎</button>
        <button onClick={() => handleRemove(item.id)}>✕</button>
        </li>)}
   </List>
  )
}
