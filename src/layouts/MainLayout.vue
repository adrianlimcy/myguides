<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Ricoh Singapore - MyGuides
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Main Page',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Meeting Room',
    caption: 'How to book a meeting room',
    icon: 'room',
    link: '/meetingRoom'
  },
  {
    title: 'Wireless Presentation',
    caption: 'How to present wirelessly',
    icon: 'podcasts',
    link: '/wirelessPresentation'
  },
  {
    title: 'Remote Access',
    caption: 'How to allow remote access to Corporate IT if you’re working at home',
    icon: 'settings_remote',
    link: '/remoteAccess'
  },
  {
    title: 'Mobile eLeave',
    caption: 'Apply eleave on your phone',
    icon: 'smartphone',
    link: '/eleave'
  },
  {
    title: 'VPN',
    caption: 'How to connect to office network',
    icon: 'timeline',
    link: '/VPN'
  },
  {
    title: 'Update Password from Home',
    caption: 'How to update Password at home',
    icon: 'code',
    link: '/passwordUpdate'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
