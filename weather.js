#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
	try {
		await saveKeyValue('token', token);
		printSuccess(`token ${token} is saved`);
	} catch (e) {
		console.log(e);
		printError(e.message);
	}
};

const initCLI = () => {
	let res = getArgs(process.argv);
	if (res.h) {
		printHelp();
	}
	if (res.s) {

	}
	if (res.t) {
		return saveToken(res.t);
	}
};

initCLI();