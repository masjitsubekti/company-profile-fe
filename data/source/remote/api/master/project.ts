import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'project'

const fetchAllProject = (prams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${prams}`)
const addProject = (data: any) => new Remote(remoteEnum.post, `${baseUrl}`, data)
const editProject = (id: any, data: any) => new Remote(remoteEnum.put, `${baseUrl}/${id}`, data)
const deleteProject = (id: any) => new Remote(remoteEnum.delete, `${baseUrl}/${id}`)

export {
  fetchAllProject,
  addProject,
  editProject,
  deleteProject
}
