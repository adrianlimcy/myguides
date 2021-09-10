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
        title="Step 1: Go to App Store"
        icon="settings"
        :done="step > 1"
      >
        <q-card class="my-card">
          <img src="~/assets/appStoreFortiClient.png">
          <q-card-section>
            <div class="text-h6">Go to “App Store/Play Store” icon from your phone and download “FortiClient VPN”.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Step 2: Click Allow"
        icon="create_new_folder"
        :done="step > 2"
      >
        <q-card class="my-card">
          <img src="~/assets/allowVPNMobile.png">
          <q-card-section>
            <div class="text-h6">After installed, open FortiClient VPN and click “allow” to add VPN configurations.</div>
          </q-card-section>
        </q-card>

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Step3: Click on Add Configuration"
        icon="assignment"
        :done="step > 3"
      >
        <q-card class="my-card">
          <img src="~/assets/addConfigMobile.png">
          <q-card-section>
            <div class="text-h6">Click on “Add Configuration..” to add a VPN. Follow below screenshot to insert the information. For “User” tab please fill in your own username.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continue" />
            <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Step 4: Added VPN"
        icon="add_comment"
        :done="step > 4"
      >
        <q-card class="my-card">
          <img src="~/assets/addedVPNMobile.png">
          <q-card-section>
            <div class="text-h6">Below screenshot shows added VPN.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 5" color="primary" label="Continue" />
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="5"
        title="Step 5: Insert credentials"
        icon="add_comment"
        :done="step > 5"
      >
        <q-card class="my-card">
          <img src="~/assets/mainVPNMobile.png">
          <q-card-section>
            <div class="text-h6"> Go back to main page of VPN and turn on the VPN. Insert the username and password after the pop out screen.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 6" color="primary" label="Continue" />
          <q-btn flat @click="step = 4" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="6"
        title="Step 6: Connection"
        icon="add_comment"
        :done="step > 6"
      >
        <q-card class="my-card">
          <img src="~/assets/usernameVPNMobile.png">
          <q-card-section>
            <div class="text-h6">After insert your username and password it will connected to VPN, make sure on top right of the ipad is connected to vpn as shows below.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 7" color="primary" label="Continue" />
          <q-btn flat @click="step = 5" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <!-- LAST STEP -->
      <q-step
        :name="7"
        title="Step 7: Open a browser (Safari)"
        icon="add_comment"
        :done="step > 7"
      >
        <q-card class="my-card">
          <img src="~/assets/safariMobile.png">
          <q-card-section>
            <div class="text-h6">Go to a browser / “Safari” and key in 172.19.107.50/eSolution/login.aspx and it will direct you to e-Leave system.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn flat @click="step = 6" color="primary" label="Back" class="q-ml-sm" />
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
  name: 'PageVPN',
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

