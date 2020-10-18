<template lang="pug">
#admin
  h1 Esto es el panel de admin
  ul
    li(
      v-for='member in dataMembers'
      :key='member._id'
    )
      | {{ member.memberNumber + ' '}} {{ member.name + ' ' }}
      | {{ member.firstSurname + ' ' }} {{ member.secondSurname }}

  button(@click='goBack')
    p Volver
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getMembersApi } from '@/app/services/members'
import { Member } from '../../../../interfaces/member'

export default defineComponent({
  name: 'Admin',
  data() {
    return {
      dataMembers: ref<Member[] | undefined>()
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'MyArea' })
    }
  },
  async mounted() {
    const { members } = await getMembersApi()
    this.dataMembers = members
  }
})
</script>
