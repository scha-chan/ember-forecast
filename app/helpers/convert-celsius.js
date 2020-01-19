import { helper } from '@ember/component/helper';

export default helper(function convertToCelsius(temperature) {
  return Math.ceil(temperature - 273.15);
});