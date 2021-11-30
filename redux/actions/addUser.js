export const type = 'addUser';

const addUser = (userDates) => ({
    type,
    payload: userDates
});

export default addUser;