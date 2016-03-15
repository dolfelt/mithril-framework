import m from 'mithril';
import Home from 'controller/home';
import List from 'controller/list';

m.route.mode = 'hash';

export default m.route(document.body, '/', {
  '/': Home,
  '/list': List
});
