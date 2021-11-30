export const type = 'filtered';

const filtered = (itemValue) => ({
    type,
    payload: itemValue

});

export default filtered;