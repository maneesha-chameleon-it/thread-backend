"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = exports.LoginUserDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class LoginUserDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], LoginUserDto.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], LoginUserDto.prototype, "password", void 0);
exports.LoginUserDto = LoginUserDto;
class CreateUserDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateUserDto.prototype, "phoneNumber", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "emailStatus", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=users.dto.js.map