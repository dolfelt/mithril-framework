import m from 'mithril';

export default function(options) {
  return m('header#main-header', {role: 'navigation'}, [
    m('.navbar__header', process.env.APP_TITLE),
    function() {
      if (options.customHeader) {
        return m('.navbar__custom', options.customHeader);
      } else if (options.title) {
        return m('h1.navbar__title', options.title);
      }
    }()
  ]);
}
