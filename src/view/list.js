import View from "view/base";

class ListView extends View {

    render() {
        return m("div", "Data List View!");
    }

}

export default function(ctrl) {
    return new ListView(ctrl).build();
}
