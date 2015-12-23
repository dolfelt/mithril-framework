import Controller from "controller/base";
import ListView from "view/list";

class ListController extends Controller {

    constructor() {
        super();

        
    }

    options() {
        return {
            title: "List"
        };
    }
}

export default {
    controller: ListController,
    view: ListView
};
