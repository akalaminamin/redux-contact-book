import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_ALL,
  CLEAR_ALL,
  DELETE_SELECTED_CONTACT,
} from "../constant/types";

// add contact action
export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});

// get contact action
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

// update contact action
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

// delete contact action
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

// select all contact action
export const selectedAllContact = (id) => ({
  type: SELECT_ALL,
  payload: id,
});

// clear all contact action
export const clearAllContact = () => ({
  type: CLEAR_ALL,
});

// delete all selected action 
export const deleteAllSelectedContact = () => ({
    type: DELETE_SELECTED_CONTACT,
})
