import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'layanan'

const fetchAllLayanan = (prams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${prams}`)
const addLayanan = (data: any) => new Remote(remoteEnum.post, `${baseUrl}`, data)
const editLayanan = (id: any, data: any) => new Remote(remoteEnum.put, `${baseUrl}/${id}`, data)
const deleteLayanan = (id: any) => new Remote(remoteEnum.delete, `${baseUrl}/${id}`)

export {
  fetchAllLayanan,
  addLayanan,
  editLayanan,
  deleteLayanan
}
