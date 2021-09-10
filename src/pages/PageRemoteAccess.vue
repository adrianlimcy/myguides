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
        title="Step 1: Look at your Desktop"
        icon="settings"
        :done="step > 1"
      >
        <q-card class="my-card">
          <img src="~/assets/desktopRemoteAccess.png">
          <q-card-section>
            <div class="text-h6">Go to your Desktop and find shortcut Quick Support and doubled-click it.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Step 2: Download Teamviewer"
        icon="create_new_folder"
        :done="step > 2"
      >
        <q-card class="my-card">
          <img src="~/assets/teamViewerRemoteAccess.png">
          <q-card-section>
            <div class="text-h6">It will download a program TeamViewerQS.exe and open the file once finished downloading.</div>
          </q-card-section>
        </q-card>

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Step3: Pop-up Message"
        icon="assignment"
        :done="step > 3"
      >
        <q-card class="my-card">
          <img src="~/assets/idRemoteAccess.png">
          <q-card-section>
            <div class="text-h6">If you’re prompted by a pop-up message with “Do you want to allow this app to make changes to your device?”, click “Yes”. You will see a TeamViewer QuickSupport application has launched. Give us “YOUR ID” and “PASSWORD” to let us remote to your device with secured connection</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continue" />
            <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Step 4: Press Ctrl+Alt+Del and login"
        icon="add_comment"
      >
        <q-card class="my-card">
          <img src="~/assets/connectRemoteAccess.png">
          <q-card-section>
            <div class="text-h6">If you need us to connect with QuickSupport, you don’t need to download again. Please go to your Downloadfolder and find the downloaded file again to launch.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
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
  name: 'PagePasswordUpdate',
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

