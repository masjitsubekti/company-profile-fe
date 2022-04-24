import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'get-user'

const fetchOneGetUser = (queryPrams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${queryPrams}`)

export {
  fetchOneGetUser
}
