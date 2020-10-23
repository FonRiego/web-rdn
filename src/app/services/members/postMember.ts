import useApi from '../../libs/apiService'
import { Ref, ref } from 'vue'
import { API_URL } from '../../settings'
import { NewMember } from '../../interfaces/newMember'

export type Member = Promise<{ member: Ref<NewMember | undefined> }>

export default async function(newMember: NewMember): Member {
  const { response: member, request } = useApi<NewMember>(`${API_URL}member/addMember/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMember)
  })

  const loaded = ref(false)

  if (loaded.value === false) {
    await request()
    loaded.value = true
  }

  return { member }
}
