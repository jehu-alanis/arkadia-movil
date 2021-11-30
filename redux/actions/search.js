export const type = 'search';

const search = (value) => ({
    type,
    payload: value

});

export default search;