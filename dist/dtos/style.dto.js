"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStyleDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateStyleDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateStyleDto.prototype, "style_type", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateStyleDto.prototype, "height", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateStyleDto.prototype, "width", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateStyleDto.prototype, "price", void 0);
exports.CreateStyleDto = CreateStyleDto;
//# sourceMappingURL=style.dto.js.map