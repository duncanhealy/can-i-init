#!/usr/bin/env node
import yargs from 'yargs';
import data from "./data";
import chalk from 'chalk';
// const argv2 = yargs(hideBin(process.argv)).argv
async function canInit() {
    const argv = await yargs.options({
        check: { type: 'boolean', default: false },
        packagename: { type: 'string', demandOption: true },
    }).argv;
    const packageName = argv.packagename;
    if (packageName) {
        console.info(chalk.green(`Searching for Package ${packageName}`));
        if (data.includes(packageName)) {
            console.info(chalk.green(`Package ${packageName} found`));
        }
        else {
            console.info(chalk.red(`Package ${packageName} not found`));
        }
    }
    else {
        console.info(chalk.red(`Package ${packageName} not found`));
    }
}
canInit();
