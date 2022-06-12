import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'project'

const fetchAllProject = (prams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${prams}`)
const fetchOneProject = (id: any) => new Remote(remoteEnum.get, `${baseUrl}/${id}`)
const addProject = (data: any) => new Remote(remoteEnum.post, `${baseUrl}`, data)
const editProject = (id: any, data: any) => new Remote(remoteEnum.put, `${baseUrl}/${id}`, data)
const deleteProject = (id: any) => new Remote(remoteEnum.delete, `${baseUrl}/${id}`)
const addPhotoProject = (data: any) => new Remote(remoteEnum.post, `${baseUrl}/upload`, data)
const deletePhotoProject = (id: any) => new Remote(remoteEnum.delete, `${baseUrl}/image/${id}`)

export {
  fetchAllProject,
  addProject,
  editProject,
  deleteProject,
  fetchOneProject,
  addPhotoProject,
  deletePhotoProject
}
