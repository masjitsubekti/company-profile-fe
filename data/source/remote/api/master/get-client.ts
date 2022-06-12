import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'get-client'

const fetchAllGetClient = (queryPrams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${queryPrams}`)

export {
  fetchAllGetClient
}