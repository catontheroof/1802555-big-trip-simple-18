
import { render } from '../render.js';
import ListView from '../view/list_view.js';
import PointView from '../view/point_view.js';
import CreateFormView from '../view/create_form.js';


const POINTS_COUNTER = 3;

export default class ListPresenter {
  pointsList = new ListView();

  init = (listContainer) => {
    this.listContainer = listContainer;

    render(this.pointsList, this.listContainer);
    render(new CreateFormView(), this.pointsList.getElement());
    

    for (let i = 0; i < POINTS_COUNTER; i++) {
      render(new PointView(), this.pointsList.getElement());
    }
  };
}
