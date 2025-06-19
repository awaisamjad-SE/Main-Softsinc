// src/data/contactData.js

const contactData = [];

export const saveContact = (contact) => {
  contactData.push(contact);
  console.log('Contact Saved:', contact); // For debugging
};

export const getContacts = () => contactData;
