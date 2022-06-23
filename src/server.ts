process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import ProductBuilderRoute from '@routes/productBuilder.route';
import FabricRoute from './routes/fabric.route';
import StyleRoute from './routes/style.route';
import CartRoute from './routes/cart.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new ProductBuilderRoute(), new FabricRoute(), new StyleRoute(), new CartRoute() ]);

app.listen();
