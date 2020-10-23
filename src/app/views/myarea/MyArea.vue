<template lang="pug">
h1 Esto es 'my area'
button(@click='goToAdmin')
  p Ir a Admin
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyArea',
  methods: {
    goToAdmin() {
      this.$router.push({ name: 'Admin' })
    }
  }
})
</script>
