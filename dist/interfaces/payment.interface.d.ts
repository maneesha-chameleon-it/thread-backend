export interface Payment {
    id: number;
    invoice: string;
    amount: number;
    order_id: number;
    transaction_id: number;
    payment_id: number;
    transaction_status: string;
}
