import Sequelize from 'sequelize';
declare const DB: {
    Users: typeof import("@models/users.model").UserModel;
    ProductBuilder: typeof import("@models/productBuilder.model").ProductBuilderModel;
    Fabric: typeof import("@/models/fabric.model").FabricModel;
    Style: typeof import("@/models/style.model").StyleModel;
    Cart: typeof import("@/models/cart.model").CartModel;
    Order: typeof import("@/models/order.model").OrderModel;
    OrderDetails: typeof import("@/models/orderDetails").OrderDetailsModel;
    Payment: typeof import("@/models/payment.model").PaymentModel;
    sequelize: Sequelize.Sequelize;
    Sequelize: typeof Sequelize;
};
export default DB;
