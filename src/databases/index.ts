import config from 'config';
import Sequelize from 'sequelize';
import { dbConfig } from '@interfaces/db.interface';
import UserModel from '@models/users.model';
import { logger } from '@utils/logger';
import ProductBuilderModel from '@models/productBuilder.model';
import  FabricModel  from '@/models/fabric.model';
import  StyleModel  from '@/models/style.model';
import CartModel from '@/models/cart.model';
import OrderModel from '@/models/order.model';
import PaymentModel from '@/models/payment.model'

const { host, user, password, database, pool }: dbConfig = config.get('dbConfig');
const sequelize = new Sequelize.Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  // timezone: '+09:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: pool.min,
    max: pool.max,
  },
  logQueryParameters: process.env.NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});
  sequelize.authenticate();


const DB = {
  Users: UserModel(sequelize),
  ProductBuilder: ProductBuilderModel(sequelize),
  Fabric: FabricModel(sequelize),
  Style: StyleModel(sequelize),
  Cart: CartModel(sequelize),
  Order: OrderModel(sequelize),
  Payment: PaymentModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default DB;
