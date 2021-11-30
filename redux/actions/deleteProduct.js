export const type = 'deleteProduct';

const deleteProduct = (product) => ({
    type,
    payload: product

});

export default deleteProduct;