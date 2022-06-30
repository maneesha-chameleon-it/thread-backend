"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';
require("dotenv/config");
const app_1 = (0, tslib_1.__importDefault)(require("@/app"));
const auth_route_1 = (0, tslib_1.__importDefault)(require("@routes/auth.route"));
const index_route_1 = (0, tslib_1.__importDefault)(require("@routes/index.route"));
const users_route_1 = (0, tslib_1.__importDefault)(require("@routes/users.route"));
const productBuilder_route_1 = (0, tslib_1.__importDefault)(require("@routes/productBuilder.route"));
const fabric_route_1 = (0, tslib_1.__importDefault)(require("./routes/fabric.route"));
const style_route_1 = (0, tslib_1.__importDefault)(require("./routes/style.route"));
const cart_route_1 = (0, tslib_1.__importDefault)(require("./routes/cart.route"));
const validateEnv_1 = (0, tslib_1.__importDefault)(require("@utils/validateEnv"));
(0, validateEnv_1.default)();
const app = new app_1.default([new index_route_1.default(), new users_route_1.default(), new auth_route_1.default(), new productBuilder_route_1.default(), new fabric_route_1.default(), new style_route_1.default(), new cart_route_1.default()]);
app.listen();
//# sourceMappingURL=server.js.map