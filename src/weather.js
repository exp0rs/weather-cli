import { ApiService } from './services/api.service.js';
import { LogService } from './services/log.service.js';
import { StorageService } from './services/storage.service.js';

class Weather {
	__stingCli = process.argv;
	__argsCli = {};

	init = () => {
		const { setConfig, keyDictionary } = StorageService;
		this.getArgsCli();
		if (this.__argsCli.h) {
			return LogService.printHelp();
		}
		if (this.__argsCli.c) {
			return setConfig(keyDictionary.city, this.__argsCli.c);
		}
		if (this.__argsCli.t) {
			return setConfig(keyDictionary.token, this.__argsCli.t);
		} else {
			return ApiService.getWeather();
		}
	};

	getArgsCli = () => {
		const [executer, file, ...rest] = this.__stingCli;
		rest.forEach((value, index, array) => {
			if (value.charAt(0) == '-') {
				if (index !== array[array.length - 1]) {
					if (array[index + 1] && array[index + 1].charAt(0) !== '-') {
						this.__argsCli[value.substring(1)] = array[index + 1];
					} else {
						this.__argsCli[value.substring(1)] = true;
					}
				}
			}
		});
	};
}

export const app = new Weather();