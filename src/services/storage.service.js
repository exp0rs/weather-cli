import fs, { promises } from 'fs';
import { join, resolve } from 'path';
import { LogService } from './log.service.js';

export class StorageService {

	static __data = {};

	static __pathWeatherConfig = join(resolve(), 'src', 'config', 'weather-config.json');

	static keyDictionary = {
		city: 'city',
		token: 'token'
	};

	static setConfig = async (key, value) => {
		try {
			this.__data = await this.getConfig(this.__pathWeatherConfig);
			this.__data[key] = value;
			await promises.writeFile(this.__pathWeatherConfig, JSON.stringify(this.__data));
			LogService.printSuccess(`setted ${key}: ${value}`);
		} catch (e) {
			LogService.printError(e.message);
		}
	};

	static getConfig = async (path) => {
		if (fs.existsSync(this.__pathWeatherConfig)) {
			let __path = path ?? this.__pathWeatherConfig;
			const data = await promises.readFile(__path);
			return JSON.parse(data);
		} else {
			return {};
		}
	};
}