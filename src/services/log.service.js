import chalk from 'chalk';
import dedent from 'dedent-js';

export class LogService {

	static printError = (error) => {
		return console.log(`${chalk.bgRed.bold(' ERROR: ')} ${error}`);
	};

	static printSuccess = (meassage) => {
		return console.log(`${chalk.bgGreen.bold(' Success: ')} ${meassage}`);
	};

	static printHelp = () => {
		console.log(dedent`
		${chalk.bgYellow.black.bold(' Help: ')}
		At the first launch, you need to set a token and city
		-h for help
		-c for set city
		-t for set api weather token
		`);
	};

	static printWeather = (data) => {
		let { weather, main, wind, name } = data;
		console.log(dedent`
		${chalk.bgRgb(94, 147, 166).bold(' Weather: ')}
		City: ${name}
		Description ${weather[0].description}
		Temperature ${main.temp} C
		Pressure ${main.pressure}
		Wind: speed ${wind.speed} m/s direction ${wind.deg} 
		`);
	};
};;;