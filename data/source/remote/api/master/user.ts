import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'user'

const fetchAllUser = (prams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${prams}`)
const fetchOneUser = (id: any) => new Remote(remoteEnum.get, `${baseUrl}/${id}`)
const addUser = (data: any) => new Remote(remoteEnum.post, `${baseUrl}`, data)
const editUser = (id: any, data: any) => new Remote(remoteEnum.put, `${baseUrl}/${id}`, data)
const deleteUser = (id: any) => new Remote(remoteEnum.delete, `${baseUrl}/${id}`)

export {
  fetchAllUser,
  addUser,
  editUser,
  deleteUser,
  fetchOneUser
}
