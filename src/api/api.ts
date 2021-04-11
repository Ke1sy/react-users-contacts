import contactsData from './contacts.json';

//here could be api logic

export const usersAPI = {
    getUsers: () => {
        return contactsData;
    },
};
