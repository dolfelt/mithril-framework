import Sidebar from "view/layout/sidebar";
import Header from "view/layout/header";

export default function(body, options) {
    return m("#the-app", [
        Sidebar(options),
        Header(options),
        m("#content.content", body)
    ]);
}
