import Home from "./controller/home";
import List from "./controller/list";

m.route.mode = "pathname";

export default m.route(document.body, "/", {
    "/": Home,
    "/list": List,
});
