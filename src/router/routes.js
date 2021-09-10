
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/wirelessPresentation', 
        name: 'wirelessPresentation',
        component: () => import('pages/PageWirelessPresentation.vue') 
      },
      { path: '/meetingRoom', 
        name: 'meetingRoom',
        component: () => import('pages/PageMeetingRoom.vue') 
      },
      { path: '/remoteAccess', 
        name: 'remoteAccess',
        component: () => import('pages/PageRemoteAccess.vue') 
      },
      { path: '/eleave', 
        name: 'eLeave',
        component: () => import('pages/PageLeave.vue') 
      },
      { path: '/VPN', 
        name: 'VPN',
        component: () => import('pages/PageVPN.vue') 
      },
      { path: '/passwordUpdate', 
        name: 'passwordUpdate',
        component: () => import('pages/PagePasswordUpdate.vue') 
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
