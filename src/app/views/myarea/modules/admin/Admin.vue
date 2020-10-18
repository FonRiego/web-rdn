<template lang="pug">
h1 Esto es el panel de admin
button(@click='goBack')
  p Volver
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Admin',
  methods: {
    goBack() {
      this.$router.push({ name: 'MyArea' })
    }
  }
})
</script>
