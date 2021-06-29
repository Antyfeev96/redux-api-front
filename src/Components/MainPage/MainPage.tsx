import React, { Fragment } from 'react';
import { Redirect } from 'react-router';
import AddForm from "../Form/AddForm";
import Filter from "../Filter/Filter";
import ItemsList from "../ItemsList/ItemsList";
import API from "../../API";

const api = new API();

function MainPage(): JSX.Element {
  api.fetchItems().then(value => console.log(value));
  return (
    <Fragment>
      <AddForm/>
      <Filter />
      <ItemsList />
    </Fragment>
  );
}

export default MainPage;