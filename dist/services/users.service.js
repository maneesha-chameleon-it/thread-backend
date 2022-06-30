"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = (0, tslib_1.__importDefault)(require("bcrypt"));
const _databases_1 = (0, tslib_1.__importDefault)(require("@databases"));
const HttpException_1 = require("@exceptions/HttpException");
const util_1 = require("@utils/util");
class UserService {
    constructor() {
        this.users = _databases_1.default.Users;
    }
    async findAllUser() {
        const allUser = await this.users.findAll();
        return allUser;
    }
    async findUserById(userId) {
        if ((0, util_1.isEmpty)(userId))
            throw new HttpException_1.HttpException(400, "You're not userId");
        const findUser = await this.users.findByPk(userId);
        if (!findUser)
            throw new HttpException_1.HttpException(409, "You're not user");
        return findUser;
    }
    async createUser(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "You're not userData");
        const findUser = await this.users.findOne({ where: { email: userData.email } });
        if (findUser)
            throw new HttpException_1.HttpException(409, `You're email ${userData.email} already exists`);
        const hashedPassword = await bcrypt_1.default.hash(userData.password, 10);
        const createUserData = await this.users.create(Object.assign(Object.assign({}, userData), { password: hashedPassword }));
        return createUserData;
    }
    async updateUser(userId, userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "You're not userData");
        const findUser = await this.users.findByPk(userId);
        if (!findUser)
            throw new HttpException_1.HttpException(409, "You're not user");
        const hashedPassword = await bcrypt_1.default.hash(userData.password, 10);
        await this.users.update(Object.assign(Object.assign({}, userData), { password: hashedPassword }), { where: { id: userId } });
        const updateUser = await this.users.findByPk(userId);
        return updateUser;
    }
    async deleteUser(userId) {
        if ((0, util_1.isEmpty)(userId))
            throw new HttpException_1.HttpException(400, "You're not userId");
        const findUser = await this.users.findByPk(userId);
        if (!findUser)
            throw new HttpException_1.HttpException(409, "You're not user");
        await this.users.destroy({ where: { id: userId } });
        return findUser;
    }
}
exports.default = UserService;
//# sourceMappingURL=users.service.js.map