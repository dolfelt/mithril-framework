import m from 'mithril';
import View from 'view/base';

class HomeView extends View {

  render() {
    return m('.row', [
      m('.col-md-12', [
        m('p', 'Just a basic page with not much on it.'),
        m('p', [
          'For more to read, visit ',
          m('a', {href: 'http://ctobyday.com'}, 'ctobyday.com')
        ])
      ])
    ]);
  }

}

export default function(ctrl) {
  return new HomeView(ctrl).build();
}
