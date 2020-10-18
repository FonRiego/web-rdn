<template lang="pug">
#admin
  h1 Esto es el panel de admin
  Suspense
    template(#default)
      wrn-members
    template(#fallback)
      h2 Loading...

  button(@click='goBack')
    p Volver
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import wrnMembers from '@/app/components/Members.vue'

export default defineComponent({
  name: 'Admin',
  methods: {
    goBack() {
      this.$router.push({ name: 'MyArea' })
    }
  },
  components: {
    wrnMembers
  }
})
</script>
