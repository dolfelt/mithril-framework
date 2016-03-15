import Controller from 'controller/base';
import HomeView from 'view/home';

class HomeController extends Controller {

  constructor() {
    super();

    // Do your page logic here, like loading data. When doing your logic,
    // be sure to call m.startComputation() and m.endComputation() in
    // order to trigger redrawing.
  }

  options() {
    return {
      title: 'Dashboard'
    };
  }
}

export default {
  controller: HomeController,
  view: HomeView
};
