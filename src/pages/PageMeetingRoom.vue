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
        title="Step 1: Select Book"
        icon="settings"
        :done="step > 1"
      >
        <q-card class="my-card">
          <img src="~/assets/bookMeetingRoom.png">
          <q-card-section>
            <div class="text-h6">Click on "Book" on the iPad beside the meeting room.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Step 2: Time Slot"
        icon="create_new_folder"
        :done="step > 2"
      >
        <q-card class="my-card">
          <img src="~/assets/timeMeetingRoom.png">
          <q-card-section>
            <div class="text-h6">Indicate the required time slot.</div>
          </q-card-section>
        </q-card>

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Step3: Meeting Details"
        icon="assignment"
        :done="step > 3"
      >
        <q-card class="my-card">
          <img src="~/assets/detailsMeetingRoom.png">
          <q-card-section>
            <div class="text-h6"> Input Subjects*, Body and Attendees*.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continue" />
            <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Step 4: Confirm Booking"
        icon="add_comment"
        :done="step > 4"
      >
        <q-card class="my-card">
          <img src="~/assets/confirmMeetingRoom.png">
          <q-card-section>
            <div class="text-h6">Confirm booking by pressing Book.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 5" color="primary" label="Continue" />
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="5"
        title="Step 5: Be Present for Meeting"
        icon="add_comment"
        :done="step > 5"
      >
        <q-card class="my-card">
          <img src="~/assets/hereMeetingRoom.png">
          <q-card-section>
            <div class="text-h6">Please be there 5 mins before or after your booked slot, select “I am here”.</div>
          </q-card-section>
        </q-card>
        <q-stepper-navigation>
          <q-btn @click="step = 6" color="primary" label="Continue" />
          <q-btn flat @click="step = 4" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <!-- LAST STEP -->
      <q-step
        :name="6"
        title="Step 6: Proceed with your meeting"
        icon="add_comment"
        :done="step > 7"
      >
        <q-card class="my-card">
          <img src="~/assets/proceedMeetingRoom.png">
          <q-card-section>
            <div class="text-h6">Proceed with your meeting.</div>
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

