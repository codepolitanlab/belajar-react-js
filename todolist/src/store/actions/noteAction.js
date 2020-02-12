import * as actionTypes from './actionTypes'

export const addNote = (note) => ({
  type: actionTypes.ADD_NOTE,
  payload: note
})
