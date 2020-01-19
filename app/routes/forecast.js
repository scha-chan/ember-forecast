import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ForecastRoute extends Route {
  @service store;

  async model(params) {
    let forecast = JSON.parse(localStorage.getItem('forecasts'));
    let date = moment.unix(params.forecast_dt).format('DD/MM/YYYY');
    let forecastDate = forecast.list.filter((item) => {
      return moment.unix(item.dt).format('DD/MM/YYYY') == date;					      
    });
    console.log(forecastDate);
    return { city: forecast.city, list: forecastDate  }
  }
}
