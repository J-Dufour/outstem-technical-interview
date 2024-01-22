import orderData from './order_data.json'
import pricingData from './pricing_data.json'
import  reviewData from './review_data.json'
import { Order, Review } from './types';

const getOrderData = () : Order[] => {
    return orderData as Order[];
}

const getPricingData = () => {
    return pricingData;
}

const getReviewData = () : Review[] => {
    return reviewData as Review[];
}

export {getOrderData, getPricingData, getReviewData};