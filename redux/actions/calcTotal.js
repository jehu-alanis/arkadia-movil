export const type = 'calcTotal';

const calcTotal = (price) => ({
    type,
    payload: price

});

export default calcTotal;