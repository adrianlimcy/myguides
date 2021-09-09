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
        title="Step 1: Open FortiClient VPN"
        icon="settings"
        :done="step > 1"
      >
        <q-card class="my-card">
          <img src="~/assets/FortiClientScreen.png">
          <q-card-section>
            <div class="text-h6">Change your password via FortiClient VPN</div>
            <div class="text-subtitle2">Ensure that your password matches the required criteria</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Step 2: Log out of Windows"
        icon="create_new_folder"
        :done="step > 2"
      >
        <q-card class="my-card">
          <img src="~/assets/CtrlAltDel.png">
          <q-card-section>
            <div class="text-h6">After changing the password, press "Ctrl+Alt+Del"</div>
          </q-card-section>
        </q-card>

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Step3: Lock the screen"
        icon="assignment"
        :done="step > 3"
      >
        <q-card class="my-card">
          <img src="~/assets/selectLock.png">
          <q-card-section>
            <div class="text-h6">Select Lock to lock the laptop</div>
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
        Login again with your new password to update teh Laptop Windows login password.
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
  name: 'PageIndex',
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

