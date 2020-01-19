import Model, { attr } from '@ember-data/model';

export default class ForecastModel extends Model {
  @attr cod;
  @attr message;
  @attr city; //ForecastCityModel
  @attr cnt;
  @attr list; //ForecastDateModel[]
}

export class ForecastCityModel extends Model {
  @attr geoname_id;
  @attr name;
  @attr lat;
  @attr lon;
  @attr country;
  @attr iso2;
  @attr type;
  @attr population;  
}

export class ForecastDateModel extends Model {
  @attr dt;
  @attr temp; //ForecastTemperatureModel
  @attr pressure;
  @attr humidity;
  @attr weather; //ForecastWeatherModel[]
  @attr speed;
  @attr deg;
  @attr clouds;
  @attr snow;
}

export class ForecastTemperatureModel extends Model {
  @attr day;
  @attr min;
  @attr max;
  @attr night;
  @attr eve;
  @attr morn;
}

export class ForecastWeatherModel extends Model {
  @attr id;
  @attr main;
  @attr description;
  @attr icon;
}

