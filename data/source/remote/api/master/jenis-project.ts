import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'jenis-project'

const fetchAllJenisProject = (prams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${prams}`)
const addJenisProject = (data: any) => new Remote(remoteEnum.post, `${baseUrl}`, data)
const editJenisProject = (id: any, data: any) => new Remote(remoteEnum.put, `${baseUrl}/${id}`, data)
const deleteJenisProject = (id: any) => new Remote(remoteEnum.delete, `${baseUrl}/${id}`)

export {
  fetchAllJenisProject,
  addJenisProject,
  editJenisProject,
  deleteJenisProject
}
