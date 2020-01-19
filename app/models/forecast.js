import Model, { attr } from '@ember-data/model';

export default class ForecastModel extends Model {
  @attr cod;
  @attr message;
  @attr city; //ForecastCityModel
  @attr cnt;
  @attr list; //ForecastDateModel[]
}

export class ForecastCityModel extends Model {
  @attr id;
  @attr name;
  @attr coord; //ForecastCoordinatesModel  
  @attr country;
  @attr timezone;
  @attr sunrise;
  @attr sunset;  
}

export class ForecastCoordinatesModel extends Model {
  @attr lat;
  @attr lon;
}

export class ForecastDateModel extends Model {
  @attr dt;
  @attr main; //ForecastTemperatureModel
  @attr weather; //ForecastWeatherModel[]
  @attr clouds;
  @attr wind;
  @attr sys;
  @attr dt_txt;
}

export class ForecastTemperatureModel extends Model {
  @attr temp;
  @attr feels_like;
  @attr temp_min;
  @attr temp_max;
  @attr pressure;
  @attr sea_level;
  @attr grnd_level;
  @attr humidity;
  @attr temp_kf;
}

export class ForecastWeatherModel extends Model {
  @attr id;
  @attr main;
  @attr description;
  @attr icon;
}

