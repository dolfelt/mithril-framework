import Controller from 'controller/base';
import ListView from 'view/list';
import m from 'mithril';

class ListController extends Controller {

  constructor() {
    super();

    this.item = m.prop(null);
  }

  options() {
    return {
      title: 'List'
    };
  }

  data() {
    return [
      {
        'id': '56fd35e9efa137f904c0c4b3',
        'picture': 'https://randomuser.me/api/portraits/men/80.jpg',
        'age': 38,
        'name': {
          'first': 'Crane',
          'last': 'Robinson'
        },
        'company': 'VENDBLEND',
        'email': 'crane.robinson@vendblend.name',
        'phone': '+1 (872) 587-3311'
      },
      {
        'id': '56fd35e9a014d3bdaa73e478',
        'picture': 'https://randomuser.me/api/portraits/women/60.jpg',
        'age': 32,
        'name': {
          'first': 'Mamie',
          'last': 'Horton'
        },
        'company': 'BLURRYBUS',
        'email': 'mamie.horton@blurrybus.org',
        'phone': '+1 (924) 530-3127'
      },
      {
        'id': '56fd35e92714a6254d632d20',
        'picture': 'https://randomuser.me/api/portraits/women/32.jpg',
        'age': 30,
        'name': {
          'first': 'Ophelia',
          'last': 'Guy'
        },
        'company': 'ZILLANET',
        'email': 'ophelia.guy@zillanet.me',
        'phone': '+1 (839) 496-3117'
      },
      {
        'id': '56fd35e9defdabdbb6275b18',
        'picture': 'https://randomuser.me/api/portraits/men/22.jpg',
        'age': 35,
        'name': {
          'first': 'Earl',
          'last': 'Barr'
        },
        'company': 'MANGLO',
        'email': 'earlene.barr@manglo.ca',
        'phone': '+1 (956) 573-3522'
      },
      {
        'id': '56fd35e97ba9fd05a4ced77f',
        'picture': 'https://randomuser.me/api/portraits/women/4.jpg',
        'age': 25,
        'name': {
          'first': 'Erica',
          'last': 'Bentley'
        },
        'company': 'MARTGO',
        'email': 'erica.bentley@martgo.us',
        'phone': '+1 (881) 449-2162'
      }
    ];
  }
}

export default {
  controller: ListController,
  view: ListView
};
