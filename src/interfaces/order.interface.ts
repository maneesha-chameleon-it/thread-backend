export interface Order {
    id: number;
    product_builder_id: number;
    user_id: number;
    count: number;
    status: string;
    shipping_address: string;
    mobile_number: number;
    payment_status: string;
  }
  