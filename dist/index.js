"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const koaStatic = require("koa-static");
const path = require("path");
const koaStatic_1 = require("./config/koaStatic");
class KoaStatic extends module_1.Module {
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.prepareConfig('koaStatic', koaStatic_1.default);
            this.app.koa.use(koaStatic(path.resolve(this.config.baseDirPath, config.directory), config));
        });
    }
}
exports.default = KoaStatic;
//# sourceMappingURL=index.js.map