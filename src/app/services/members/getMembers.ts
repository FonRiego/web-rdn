import useApi from '../../libs/apiService'
import { Ref, ref } from 'vue'
import { API_URL } from '../../settings'
import { Member } from '../../interfaces/member'

export type AllMembers = Promise<{ members: Ref<Member[] | undefined> }>

export default async function(): AllMembers {
  const { response: members, request } = useApi<Member[]>(`${API_URL}member/fetchMembers/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const loaded = ref(false)

  if (loaded.value === false) {
    await request()
    loaded.value = true
  }

  return { members }
}
