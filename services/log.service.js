import chalk from 'chalk';
import dedent from 'dedent-js';
const { bgRed, bgGreen, bgCyan } = chalk;

export const printError = (error) => {
	console.log(` ${bgRed(' Error ')}: ${error}`);
};

export const printSuccess = (message) => {
	console.log(` ${bgGreen(' Success ')}: ${message}`);
};

export const printHelp = () => {
	console.log(dedent`${bgCyan(' Help ')}: 
	without parametrs - show weather
	-h - show help
	-s [CITY] - select city
	-t [API_KEY] - save token
	`);
};