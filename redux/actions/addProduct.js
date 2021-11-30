export const type = 'addProduct';

const addProduct = (product) => ({
    type,
    payload: product

});

export default addProduct;