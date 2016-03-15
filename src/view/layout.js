import m from 'mithril';
import Sidebar from 'view/layout/sidebar';
import Header from 'view/layout/header';

class Layout {
  constructor(ctrl, body, opts={}) {
    this.ctrl = ctrl;
    this.body = body;
    this.options = opts;
  }

  render() {
    return m('#the-app', [
      Sidebar(this.options),
      Header(this.options),
      m('#content.content', this.body || 'No body')
    ]);
  }
}

export default Layout;
