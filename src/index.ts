#!/usr/bin/env node
import chalk from 'chalk';
import yargs from 'yargs';
// import { hideBin} from 'yargs/helpers'
import data from './data';

// import type Arguments from 'yargs/yargs'

async function canInit() {
  const argv = await yargs.options({
    check: { type: 'boolean', default: false },
    packagename: { type: 'string', demandOption: true },
  }).argv;
  const packageName=argv.packagename

  if(packageName){
    console.info(chalk.green(`Searching for Package ${packageName}`))
    if(data.includes(packageName)) {
      console.info(chalk.green(`Package ${packageName} found`))

    } else {
      console.info(chalk.red(`Package ${packageName} not found`))
    }
  } else {
    console.info(chalk.red(`Package ${packageName} not found`))
  }
}
canInit()
