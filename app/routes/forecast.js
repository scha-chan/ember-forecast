import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ForecastRoute extends Route {
  @service store;

  async model(params) {

  	let arrayParams = params.forecast_dt.split('-');
  	let code = arrayParams[0];
  	let date = arrayParams[1];
    let forecast = JSON.parse(localStorage.getItem('forecasts'));

  	// let forecast = this.store.findAll('forecast').then((forecasts) => {    
  	// 	return forecasts.filter((item) => {
  	// 		return item.cod == code;					      
  	// 	});
   //  });
    let forecastDate = forecast.list.filter((item) => {
  		return item.dt == date;					      
  	});
    return { city: forecast.city, list: forecastDate.firstObject }
  }
}
