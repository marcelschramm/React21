"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const desafio_1 = __importDefault(require("./desafio"));
var p1 = new desafio_1.default(1, 'José', '47321324', 'jose@gmail.com', 73, 1.80);
p1.imprimeDados();
p1.salvar();
p1.validar();
p1.imc();
