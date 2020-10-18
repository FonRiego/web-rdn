<template lang="pug">
h1 Esto es el signup
form
  div
    label Nombre
    input(
      v-model='formData.name'
    )
  div
    label Primer Apellido
    input(
      v-model='formData.firstSurname'
    )
  div
    label Segundo Apellido
    input(
      v-model='formData.secondSurname'
    )

button(@click='createMember')
  p Crear socio
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { postMemberApi } from '../../services/members'

export default defineComponent({
  name: 'Signup',
  data() {
    return {
      formData: {
        name: '',
        firstSurname: '',
        secondSurname: ''
      }
    }
  },
  methods: {
    createMember() {
      postMemberApi(this.formData)
    }
  }
})
</script>
