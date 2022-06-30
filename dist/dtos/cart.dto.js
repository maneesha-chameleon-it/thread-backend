"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCartDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateCartDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateCartDto.prototype, "product_builder_id", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateCartDto.prototype, "user_id", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateCartDto.prototype, "count", void 0);
exports.CreateCartDto = CreateCartDto;
//# sourceMappingURL=cart.dto.js.map