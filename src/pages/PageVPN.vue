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
        title="Step 1: Desktop Icon"
        icon="settings"
        :done="step > 1"
      >
        <q-card class="my-card">
          <img src="~/assets/vpnLogo.png">
          <q-card-section>
            <div class="text-h6">Go to FortiClient icon on your desktop</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Step 2: No icon?"
        icon="create_new_folder"
        :done="step > 2"
      >
        <q-card class="my-card">
          <img src="~/assets/downloadFortiClient.png">
          <q-card-section>
            <div class="text-h6">If you cannot find FortiClient icon on your desktop. Go to below link to download FortiClient.</div>
            <div class="text-subtitle2">https://www.forticlient.com/downloads</div>
          </q-card-section>
        </q-card>

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Step3: Open the downloaded file"
        icon="assignment"
        :done="step > 3"
      >
        <q-card class="my-card">
          <img src="~/assets/fortiClientExe.png">
          <q-card-section>
            <div class="text-h6">Open the downloaded .exe file. </div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continue" />
            <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Step 4: Click Yes"
        icon="add_comment"
        :done="step > 4"
      >
        <q-card class="my-card">
          <img src="~/assets/userAccountControl.png">
          <q-card-section>
            <div class="text-h6">If required Administrator password, please contact us to allow us remote into your laptop for installation.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 5" color="primary" label="Continue" />
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="5"
        title="Step 5: Tick Yes"
        icon="add_comment"
        :done="step > 5"
      >
        <q-card class="my-card">
          <img src="~/assets/fortiClientSetup.png">
          <q-card-section>
            <div class="text-h6">Tick “Yes, I have read and accept”, then click “Next” to install.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 6" color="primary" label="Continue" />
          <q-btn flat @click="step = 4" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="6"
        title="Step 6: Click Next"
        icon="add_comment"
        :done="step > 6"
      >
        <q-card class="my-card">
          <img src="~/assets/nextFortiClient.png">
          <q-card-section>
            <div class="text-h6">Click “Next” to continue install.</div>
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
          <img src="~/assets/installFortiClient.png">
          <q-card-section>
            <div class="text-h6">Click Install.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 8" color="primary" label="Continue" />
          <q-btn flat @click="step = 6" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="8"
        title="Step 8: Click Finish"
        icon="add_comment"
        :done="step > 8"
      >
        <q-card class="my-card">
          <img src="~/assets/successFortiClient.png">
          <q-card-section>
            <div class="text-h6">Click “Finish” to success installed.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 9" color="primary" label="Continue" />
          <q-btn flat @click="step = 7" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="9"
        title="Step 9: Tick the box"
        icon="add_comment"
        :done="step > 9"
      >
        <q-card class="my-card">
          <img src="~/assets/acceptFortiClient.png">
          <q-card-section>
            <div class="text-h6">Tick the box and click on “I accept”.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 10" color="primary" label="Continue" />
          <q-btn flat @click="step = 8" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="10"
        title="Step 10: Click on Configure VPN"
        icon="add_comment"
        :done="step > 10"
      >
        <q-card class="my-card">
          <img src="~/assets/configureFortiClient.png">
          <q-card-section>
            <div class="text-h6">Click on “Configure VPN”.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 11" color="primary" label="Continue" />
          <q-btn flat @click="step = 9" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="11"
        title="Step 11: Fill in information"
        icon="add_comment"
        :done="step > 11"
      >
        <q-card class="my-card">
          <img src="~/assets/infoFortiClient.png">
          <q-card-section>
            <div class="text-h6">Fill in the below information for configuration VPN setup.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 12" color="primary" label="Continue" />
          <q-btn flat @click="step = 10" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="12"
        title="Step 12: Username"
        icon="add_comment"
        :done="step > 12"
      >
        <q-card class="my-card">
          <img src="~/assets/usernameFortiClient.png">
          <q-card-section>
            <div class="text-h6">Please key in your username and windows password.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 13" color="primary" label="Continue" />
          <q-btn flat @click="step = 11" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="13"
        title="Step 13: Success"
        icon="add_comment"
        :done="step > 13"
      >
        <q-card class="my-card">
          <img src="~/assets/successFortiClient.png">
          <q-card-section>
            <div class="text-h6">Successfully connected.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 14" color="primary" label="Continue" />
          <q-btn flat @click="step = 12" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <!-- LAST STEP -->
      <q-step
        :name="14"
        title="Step 14: Open a browser"
        icon="add_comment"
        :done="step > 14"
      >
        <q-card class="my-card">
          <img src="~/assets/chromeFortiClient.png">
          <q-card-section>
            <div class="text-h6">Key in the URL: 172.19.107.50/esolution/login.aspx</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn flat @click="step = 13" color="primary" label="Back" class="q-ml-sm" />
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

