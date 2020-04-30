<template>
  <v-container fluid>
    <v-row>
      <v-col :lg="8">
        <v-card>
          <v-card-title class="headline">Marketing title</v-card-title>
          <v-card-text>
            <p>
              This is our receptionist, Pam. If you think she's cute now, you
              should have seen her a couple years ago, did this happen on
              company property? Which one? I have a lot of stupid faces, man I
              would love to burn your candles!
            </p>

            <p>
              I could always kind of win at roulette, just very? That's cool, I
              just wanna lie on the beach and eat hotdogs. That's all I've ever
              wanted, so like, missionary... I don't think-- I don't think you
              understand how jeopardy works, standard! You know, nothing fancy.
            </p>

            <p>
              When I return, I hope to be a completely changed human being, oh.
              Jim. I thought you were Mose, w-what are you doing? I'm not a
              millionaire. I thought I would be by the time I was thirty, but I
              wasn't even close. Then I thought maybe by forty, but by forty I
              had less money than I did when I was thirty, question. What kind
              of bear is best?
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col :lg="4">
        <v-card>
          <v-card-title class="headline">Sign in</v-card-title>
          <v-list one-line>
            <v-list-item>
              <v-list-item-content>
                <v-btn block @click="signInClicked('google')"
                  >Sign in with Google</v-btn
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-btn block @click="signInClicked('microsoft')"
                  >Sign in with Microsoft</v-btn
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions(['signIn']),
    async signInClicked(authType) {
      // let provider
      // if (authType === 'google') {
      //   provider = new firebase.auth.GoogleAuthProvider()
      // } else if (authType === 'microsoft') {
      //   provider = new firebase.auth.MicrosoftAuthProvider()
      // }
      await this.signIn(authType)
    }
  }
}
</script>
