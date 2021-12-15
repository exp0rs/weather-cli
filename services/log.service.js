import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
	console.log(` ${chalk.bgRed(' Error ')}: ${error}`);
};

export const printSuccess = (message) => {
	console.log(` ${chalk.bgGreen(' Success ')}: ${error}`);
};

export const printHelp = () => {
	console.log(dedent`${chalk.bgCyan(' Help ')}: 
	without parametrs - show weather
	-s [CITY] - select city
	-h - show help
	-t [API_KEY] - save token
	`);
};