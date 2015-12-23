import View from "view/base";

class HomeView extends View {

    render() {
        return m("div", "Dashboard View!");
    }

}

export default function(ctrl) {
    return new HomeView(ctrl).build();
}
