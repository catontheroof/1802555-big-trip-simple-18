import {createElement} from '../render';

const createList = () => '<ul class="trip-events__list"></ul>';

export default class ListView {
  getTemplate() {
    return createList();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}