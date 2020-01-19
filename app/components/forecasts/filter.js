import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import moment from 'moment';

export default class ForecastFilterComponent extends Component {
  @service store;
  @tracked filtered;

  get results() {

    let { forecasts, query } = this.args;
    let arraySearch = query.split(',');

    if (typeof arraySearch[1] === 'undefined' || arraySearch[1].trim().length <= 1) {
        return forecasts;
    }

    let key = '7dbb730ec7f2e440c68e695fbcb93812'; 
    let city = arraySearch[0].trim();
    let country = arraySearch[1].trim(); 
    let url = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+','+country+'&APPID='+key;

    return fetch(url).then(data => {
      return data.text();
    }).then(data => {
      forecasts = JSON.parse(data);
      this.filtered = this.filterDuplicate(forecasts);
      this.store.createRecord('forecast',forecasts);   
      localStorage.setItem('forecasts', JSON.stringify(forecasts));
      return forecasts;
    }); 
  }

  filterDuplicate(forecasts) {
      let newList = [];
      let dateList = [];
      forecast.list.forEach(function(item,index){
          let date = moment.unix(item.dt).format('DD/MM/YYYY');
          if (dateList.indexOf(date) === -1) {
              newList.push(item);
              dateList.push(date);
          }          
      });
      forecast.list = newList;
      return forecast;
  }
}

