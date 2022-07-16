import currentProduct from '../data/stackline_frontend_assessment_data_2021.json';

const initialState = {
    product: null,
    products: [],
}


const products = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'FETCH_PRODUCT':
            console.log('payload', payload);
            return {...state, product: payload};
        default:
            return state;
    }
}

//Actions
export const fetchProduct = (productId) => {
    return {
        type: 'FETCH_PRODUCT',
        meta: productId,
        payload: currentProduct[0]
    }
}

//Selectors
export const getProductTags = (state) => {
    return state.products.product?.tags;
}

export const getProductName = (state) => {
    return state.products.product?.title ||  null;
}

export const getProductDescription = (state) => {
    return state.products.product?.subtitle || null;
}

export const getProductImage = (state) => {
    return state.products.product?.image || null;
}

export const getSales = (state) => {
    return state.products.product?.sales || null;
}

export default products;