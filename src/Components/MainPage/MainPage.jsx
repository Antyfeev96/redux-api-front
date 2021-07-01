import React, { Fragment } from 'react';
import AddForm from "../Form/AddForm";
import Filter from "../Filter/Filter";
import ItemsList from "../ItemsList/ItemsList";
import API from "../../API";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../Reducers/Reducers";
const api = new API();

function MainPage() {
  // api.deleteItem(1).then(data => data);
  // api.fetchItems().then(value => console.log(value));
  // api.getItem(2).then(value => console.log(value))
  return (
    <Fragment>
      <AddForm/>
      <Filter />
      <ItemsList />
    </Fragment>
  );
}

export default MainPage;