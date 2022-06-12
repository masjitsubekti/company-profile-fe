import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'get-project'

const fetchGetProject = (queryPrams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${queryPrams}`)
const fetchAllGetProject = () => new Remote(remoteEnum.get, `${baseUrl}/all`)
const fetchOneGetProject = (id: any = '') => new Remote(remoteEnum.get, `${baseUrl}/${id}`)

export {
  fetchAllGetProject,
  fetchOneGetProject,
  fetchGetProject
}