export interface DataPoint {
    ind: string | number, // independent variable
    dep: number, // dependent variable
    colour?: string
}

export type OrderItem = {
    type: 'Cheese' | 'Pepperoni' | 'Deluxe' | 'Hawaiian' | 'Meatlovers',
    size: 'L' | 'M' | 'S',
}

export type Order = {
    order_id: number,
    store: 'Kanata' | 'Orleans' | 'Downtown' | 'Sandy Hill' | 'The Glebe',
    items: OrderItem[],
    date: string
}

export type Review = {
    review_id: number,
    sentiment: 'delighted' | 'happy' | 'sad' | 'angry',
    store: 'Kanata' | 'Orleans' | 'Downtown' | 'Sandy Hill' | 'The Glebe',
    date: string,
    message: string
}