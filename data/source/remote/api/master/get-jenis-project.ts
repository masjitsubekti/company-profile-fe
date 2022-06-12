import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'get-jenis-project'

const fetchAllGetJenisProject = (queryPrams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${queryPrams}`)

export {
  fetchAllGetJenisProject
}