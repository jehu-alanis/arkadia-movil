export const type = 'deleteNotis';

const deleteNotis = (product) => ({
    type,
    payload: product

});

export default deleteNotis;