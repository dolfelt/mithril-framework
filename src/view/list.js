import m from 'mithril';
import View from 'view/base';

class ListView extends View {

  list() {
    var selectedItem = this.ctrl.item();
    return this.ctrl.data().map((item) => {
      return m('li.list-group-item', {
        class: selectedItem && item.id === selectedItem.id ? 'active' : null,
        onclick: this.ctrl.item.bind(null, item)
      }, [
        item.name.first, ' ', item.name.last
      ]);
    });
  }

  renderListItem() {
    var item = this.ctrl.item();
    if (!item) {
      return m('.card',
        m('.card-block', [
          m('h4.card-title', 'Select Contact...'),
          m('.card-text', 'Select a contact to the left.')
        ])
      );
    } else {
      return m('.card',
        m('.card-block', [
          m('h4.card-title', [item.name.first, ' ', item.name.last]),
          m('.card-text', [
            m('img.contact--image', {src: item.picture}),
            m('p', [
              m('strong', 'Company: '), item.company
            ]),
            m('p', [
              m('strong', 'Email: '), item.email
            ])
          ])
        ])
      );
    }
  }

  render() {
    return m('.row', [
      m('.col-md-4', [
        m('ul.list-group', this.list())
      ]),
      m('.col-md-8', this.renderListItem())
    ]);
  }

}

export default function(ctrl) {
  return new ListView(ctrl).build();
}
