export const type = 'addCompra';

const addCompra = (product) => ({
    type,
    payload: product

});

export default addCompra;