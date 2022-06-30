"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const users_service_1 = (0, tslib_1.__importDefault)(require("@services/users.service"));
class UsersController {
    constructor() {
        this.userService = new users_service_1.default();
        this.getUsers = async (req, res, next) => {
            const findAllUsersData = await this.userService.findAllUser();
            return findAllUsersData;
        };
        this.getUserById = async (req, res, next) => {
            const userId = Number(req.params.id);
            const findOneUserData = await this.userService.findUserById(userId);
            return findOneUserData;
        };
        this.createUser = async (req, res, next) => {
            const userData = req.body;
            const createUserData = await this.userService.createUser(userData);
            return createUserData;
        };
        this.updateUser = async (req, res, next) => {
            const userId = Number(req.params.id);
            const userData = req.body;
            const updateUserData = await this.userService.updateUser(userId, userData);
            return updateUserData;
        };
        this.deleteUser = async (req, res, next) => {
            const userId = Number(req.params.id);
            const deleteUserData = await this.userService.deleteUser(userId);
            return deleteUserData;
        };
    }
}
exports.default = UsersController;
//# sourceMappingURL=users.controller.js.map