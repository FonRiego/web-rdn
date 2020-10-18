<template lang="pug">
ul#members
  li(
    v-for='member in dataMembers'
    :key='member._id'
  )
    | {{ member.memberNumber + ' '}} {{ member.name + ' ' }}
    | {{ member.firstSurname + ' ' }} {{ member.secondSurname }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getMembersApi } from '@/app/services/members'
import { Member } from '../interfaces/member'

export default defineComponent({
  name: 'Members',
  data() {
    return {
      dataMembers: ref<Member[] | undefined>()
    }
  },
  async mounted() {
    const { members } = await getMembersApi()
    this.dataMembers = members
  }
})
</script>
