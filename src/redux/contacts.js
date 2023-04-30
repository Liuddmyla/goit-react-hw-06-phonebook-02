import { createSlice } from '@reduxjs/toolkit';

const contacstSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],    
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },    
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: {     
    filter: '',
  },
  reducers: {    
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});


export const contactsReducer = contacstSlice.reducer;
export const filterReducer = filterSlice.reducer;

export const {  setFilter } = filterSlice.actions;
export const { addContact, deleteContact } = contacstSlice.actions;


// const contacstSlice = createSlice({
//   name: 'phonebook',
//   initialState: {
//     contacts: [],
//     filter: '',
//   },
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     setFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// const contactsReducer = contacstSlice.reducer;

// export const { addContact, deleteContact, setFilter } = contacstSlice.actions;

// export default contactsReducer;