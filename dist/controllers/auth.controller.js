"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_service_1 = (0, tslib_1.__importDefault)(require("@services/auth.service"));
class AuthController {
    constructor() {
        this.authService = new auth_service_1.default();
        this.signUp = async (req, res, next) => {
            const userData = req.body;
            const signUpUserData = await this.authService.signup(userData);
            return signUpUserData;
        };
        this.logIn = async (req, res, next) => {
            const userData = req.body;
            const { cookie, findUser } = await this.authService.login(userData);
            res.setHeader('Set-Cookie', [cookie]);
            return findUser;
        };
        this.logOut = async (req, res, next) => {
            const userData = req.user;
            const logOutUserData = await this.authService.logout(userData);
            res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
            return logOutUserData;
        };
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map