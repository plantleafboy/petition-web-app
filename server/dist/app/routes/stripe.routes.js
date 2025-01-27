"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_routes_1 = require("./base.routes");
const stripeCheckout = __importStar(require("../controllers/stripe.controller"));
module.exports = (app) => {
    app.route(base_routes_1.rootUrl + '/stripe/embedded-checkout')
        .post(stripeCheckout.createSession);
    // app.route(rootUrl+'/stripe/webhook')
    app.route(base_routes_1.rootUrl + '/stripe/session-status')
        .get(stripeCheckout.getCheckoutStatus);
    app.route(base_routes_1.rootUrl + '/stripe/webhook')
        .post(stripeCheckout.webhookFulfilment);
};
//# sourceMappingURL=stripe.routes.js.map