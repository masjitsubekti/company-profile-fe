import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'logout'

const fetchLogout = (queryPrams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${queryPrams}`)

export {
  fetchLogout
}
