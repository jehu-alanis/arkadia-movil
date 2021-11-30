export const type = 'showProduct';

const showProduct = (product) => ({
    type,
    payload: product

});

export default showProduct;