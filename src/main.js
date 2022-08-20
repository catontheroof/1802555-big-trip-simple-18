
import CreateFilterView from './view/filters_view.js';
import CreateSortView from './view/sort_view.js';
import { render } from './render.js';

import ListPresenter from './presenter/event_presenter.js';

const siteFilterControlsElement = document.querySelector('.trip-controls__filters');
const siteTripEventsElement = document.querySelector('.trip-events');
const listPresenter = new ListPresenter();

render(new CreateFilterView(), siteFilterControlsElement);
render(new CreateSortView(), siteTripEventsElement);

listPresenter.init(siteTripEventsElement);