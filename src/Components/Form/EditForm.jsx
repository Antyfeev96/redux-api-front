import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeInputField,
  changeEditedId,
  addItem,
  saveEditedItem,
  changeFilteredList,
  fetchServicesRequest, fetchServiceSuccess, fetchServicesError
} from '../../Reducers/Reducers';
import React, { Fragment, useEffect } from "react";
import Error from "../Error/Error";
import Spinner from "../Spinner/Spinner";
import API from "../../API";

const api = new API();

const Form = styled.form`
  input {
    display: block;
    padding: 2px;
    margin-top: 15px;
    width: 200px;
  }
  
  .form__buttons {
    margin-top: 15px;
    
    & button:nth-of-type(n + 2) {
      margin-left: 15px;
    }
  }
`

const NameInput = styled.input``

const PriceInput = styled.input``

const ContentInput = styled.input``

const Button = styled.button`
  cursor: pointer;
`

const fetchService = async (dispatch, id) => {
  dispatch(fetchServicesRequest());
  try {
    const response = await api.getItem(id);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    await dispatch(fetchServiceSuccess(data));
  } catch(e) {
    dispatch(fetchServicesError(e.message));
  }
}

export default function EditForm() {
  const state = useSelector(state => state.myState);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchService(dispatch, state.editedId)
  },[dispatch])

  const clearInputs = () => {
    dispatch(changeInputField({ name: 'name', value: '' }));
    dispatch(changeInputField({ name: 'price', value: '' }));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeInputField({ name, value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, price } = state
    dispatch(addItem(state,{ name, price }));
    dispatch(changeFilteredList())
    clearInputs();
  }

  const handleUpdate = event => {
    event.preventDefault()
    const { name, price } = state;
    dispatch(saveEditedItem({ name, price }));
    dispatch(changeEditedId(null));
    clearInputs();
  }

  const handleCancel = () => {
    dispatch(changeEditedId(null));
    clearInputs();
  }

  return (
      <Fragment>
        {(state.error && <Error/>) || (state.loading ? <Spinner /> :
            <Form className="form" onSubmit={state.editedId !== null ? handleUpdate : handleSubmit}>
              <div>Название</div>
              <NameInput className="form__name" name='name' onChange={handleChange} value={state.name}/>
              <div>Стоимость</div>
              <PriceInput className="form__price" name='price' onChange={handleChange} value={state.price}/>
              <div>Описание</div>
              <ContentInput className="form__description" name='description' onChange={handleChange} value={state.content}/>
              <div className="form__buttons">
                <Button className="form__cancel" onClick={handleCancel} type='button'>Cancel</Button>
                <Button className="form__button" type='submit'>Save</Button>
              </div>
            </Form>)}
      </Fragment>
  )
}
