<template>
  <q-page>
   <div class="q-pa-md row items-start q-gutter-md">
     <q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Step 1: Connect to WiFi"
        icon="settings"
        :done="step > 1"
      >
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Connect to WiFi (RSP-GUEST)</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Step 2: Open Browser"
        icon="create_new_folder"
        :done="step > 2"
      >
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Open Browser and key in IP address.</div>
          </q-card-section>
        </q-card>

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Step3: Select Guest"
        icon="assignment"
        :done="step > 3"
      >
        <q-card class="my-card">
          <img src="~/assets/wePresentGuest.png">
          <q-card-section>
            <div class="text-h6">Select Guest </div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continue" />
            <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Step 4: Type of OS"
        icon="add_comment"
        :done="step > 4"
      >
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Select type of OS and download.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 5" color="primary" label="Continue" />
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="5"
        title="Step 5: Launch MirrorOp"
        icon="add_comment"
        :done="step > 5"
      >
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Launch MirrorOp once downloaded.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 6" color="primary" label="Continue" />
          <q-btn flat @click="step = 4" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="6"
        title="Step 6: Key in IP"
        icon="add_comment"
        :done="step > 6"
      >
        <q-card class="my-card">
          <img src="~/assets/mirrorOpIP.png">
          <q-card-section>
            <div class="text-h6">Once mirrorOp is running as per below, key in the IP that is reflected in the room occupied.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 7" color="primary" label="Continue" />
          <q-btn flat @click="step = 5" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="7"
        title="Step 7: Click Install"
        icon="add_comment"
        :done="step > 7"
      >
        <q-card class="my-card">
          <img src="~/assets/playMirrorOps.png">
          <q-card-section>
            <div class="text-h6">Once connected, select "Play" to begin mirroring desktop.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 8" color="primary" label="Continue" />
          <q-btn flat @click="step = 6" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="8"
        title="Step 8: Select Pause"
        icon="add_comment"
        :done="step > 8"
      >
        <q-card class="my-card">
          <img src="~/assets/pauseMirrorOps.png">
          <q-card-section>
            <div class="text-h6">Select "Pause" to temporary stop displaying desktop.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 9" color="primary" label="Continue" />
          <q-btn flat @click="step = 7" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <!-- LAST STEP -->
      <q-step
        :name="9"
        title="Step 9: Select 'Stop'"
        icon="add_comment"
        :done="step > 9"
      >
        <q-card class="my-card">
          <img src="~/assets/stopWirelessPresentation.png">
          <q-card-section>
            <div class="text-h6">Select "Stop" to end display</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn flat @click="step = 8" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue'

export default defineComponent({
  name: 'PageWirelessPresentation',
  setup () {
    return {
      step: ref(1)
    }
  }  
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>

