"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const desafio2_1 = __importDefault(require("./desafio2"));
var p1 = new desafio2_1.default('Banana', 5, 10, 2.5, 6.5);
p1.getEstoque();
p1.precoDesc();
p1.precoAcresc();
