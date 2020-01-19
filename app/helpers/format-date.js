import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function formatDate(params) {
  return moment.unix(params[0]).format(params[1]);
});

