<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-toolbar-title class="font-weight-bold">drftr</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <div v-if="currentUser">
      <v-avatar :size="36" v-if="currentUser.photoURL">
        <img :src="currentUser.photoURL" alt="" />
      </v-avatar>
      {{ currentUser.displayName }}
    </div>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'site-menu',
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style lang="scss" scoped></style>
