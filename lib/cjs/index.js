#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const data_1 = __importDefault(require("./data"));
const chalk_1 = __importDefault(require("chalk"));
// const argv2 = yargs(hideBin(process.argv)).argv
async function canInit() {
    const argv = await yargs_1.default.options({
        check: { type: 'boolean', default: false },
        packagename: { type: 'string', demandOption: true },
    }).argv;
    const packageName = argv.packagename;
    if (packageName) {
        console.info(chalk_1.default.green(`Searching for Package ${packageName}`));
        if (data_1.default.includes(packageName)) {
            console.info(chalk_1.default.green(`Package ${packageName} found`));
        }
        else {
            console.info(chalk_1.default.red(`Package ${packageName} not found`));
        }
    }
    else {
        console.info(chalk_1.default.red(`Package ${packageName} not found`));
    }
}
canInit();
