import orderData from './order_data.json'
import pricingData from './pricing_data.json'
import  reviewData from './review_data.json'

const getOrderData = () => {
    return orderData;
}

const getPricingData = () => {
    return pricingData;
}

const getReviewData = () => {
    return reviewData;
}

export {getOrderData, getPricingData, getReviewData};