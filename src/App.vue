<template>
  <v-app>
    <site-menu></site-menu>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SiteMenu from './components/SiteMenu'

export default {
  name: 'App',
  components: {
    SiteMenu
  },
  data: () => ({
    //
  })
}
</script>
