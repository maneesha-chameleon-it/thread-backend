"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFabricDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateFabricDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateFabricDto.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateFabricDto.prototype, "fabric_type", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateFabricDto.prototype, "starting_price", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateFabricDto.prototype, "color", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateFabricDto.prototype, "material_type", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateFabricDto.prototype, "price_per_meter", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateFabricDto.prototype, "category", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateFabricDto.prototype, "milled_country_name", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateFabricDto.prototype, "composition", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateFabricDto.prototype, "cleaning", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateFabricDto.prototype, "small_curtains", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateFabricDto.prototype, "medium_curtains", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateFabricDto.prototype, "large_curtains", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateFabricDto.prototype, "image", void 0);
exports.CreateFabricDto = CreateFabricDto;
//# sourceMappingURL=fabric.dto.js.map