import axios from 'axios';
import { LogService } from './log.service.js';
import { StorageService } from './storage.service.js';

export class ApiService {
	static getWeather = async () => {
		let { getConfig, keyDictionary } = StorageService;
		let readConfig = await getConfig();
		if (readConfig[keyDictionary.city] && readConfig[keyDictionary.token]) {
			let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
				params: {
					q: readConfig[keyDictionary.city],
					appid: readConfig[keyDictionary.token],
					lang: 'ru',
					units: 'metric'
				}
			});
			LogService.printWeather(data);
		} else {
			LogService.printError('You need to set city and token first');
			return;
		}
	};
}