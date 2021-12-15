#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log.service.js';

const initCLI = () => {
	let res = getArgs(process.argv);
	if (res.h) {
		printHelp();
	}
	if (res.s) {

	}
	if (res.t) {

	}
};

initCLI();