import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'client'

const fetchAllClient = (prams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${prams}`)
const addClient = (data: any) => new Remote(remoteEnum.post, `${baseUrl}`, data)
const editClient = (id: any, data: any) => new Remote(remoteEnum.put, `${baseUrl}/${id}`, data)
const deleteClient = (id: any) => new Remote(remoteEnum.delete, `${baseUrl}/${id}`)

export {
  fetchAllClient,
  addClient,
  editClient,
  deleteClient
}
