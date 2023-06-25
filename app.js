"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const source_map_support_1 = __importDefault(require("source-map-support"));
source_map_support_1.default.install();
const homey_1 = __importDefault(require("homey"));
class SolarPanels extends homey_1.default.App {
    /**
     * onInit is called when the app is initialized.
     */
    async onInit() {
        this.homey.log("App has been initialized");
    }
}
module.exports = SolarPanels;
//# sourceMappingURL=app.js.map