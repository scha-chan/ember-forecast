import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ForecastsComponent extends Component {
	@tracked query = '';
}
