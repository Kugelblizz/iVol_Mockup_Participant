import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [


  {
    'id': 'dashboard',
    'title': 'What\'s Up',
    'type': 'item',
    'icon': 'dashboard',
    'url': '/dashboard'
  },
  {
    'id': 'profile',
    'title': 'Your Profile',
    'type': 'item',
    'icon': 'profile',
    'url': '/main/profile'
  },
  {
    'id': 'engagements',
    'title': 'Your Engagements',
    'type': 'item',
    'icon': 'engagements',
    'url': '/main/engagements'
  },
  {
    'id': 'achievements',
    'title': 'Your Achievements',
    'type': 'collapsable',
    'hidden': false,
    'icon': 'achievements',
    'url': '/achievements',
    children: [{
      'id': 'comp',
      'title': 'Deine Kompetenzen',
      'type': 'item',
      'url': '/synccompetences'

    }]
  },
  {
    'id': 'get-engaged',
    'title': 'Get Engaged',
    'type': 'item',
    'icon': 'get-engaged',
    'url': '/main/get-engaged'
  },
  {
    'id': 'get-connected',
    'title': 'Get Connnected',
    'type': 'item',
    'icon': 'get-connected',
    'url': '/main/get-connected'
  }
];
