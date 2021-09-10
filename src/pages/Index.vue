<template>
  <q-page>
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-parallax
          src="~/assets/ricohHall.jpg"
          :height="150"
        />
        <q-card-section>
          <div class="text-h6">Welcome to MyGuides</div>
          <div class="text-subtitle2">by Ricoh (Singapore) Pte Ltd</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-md">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h6">This is a guide to Ricoh Singapore Activity Based Office</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Look for a QR code if you are unsure on how to use a device / equipment in the office.
        </q-card-section>
        <q-separator inset />
        <q-card-section class="q-pt-none">
          Email: ithelp@ricoh.sg
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>
