"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreatePaymentDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreatePaymentDto.prototype, "invoice", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreatePaymentDto.prototype, "amount", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreatePaymentDto.prototype, "order_id", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreatePaymentDto.prototype, "transaction_id", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreatePaymentDto.prototype, "shipping_address", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreatePaymentDto.prototype, "transaction_status", void 0);
exports.CreatePaymentDto = CreatePaymentDto;
//# sourceMappingURL=payment.dto.js.map