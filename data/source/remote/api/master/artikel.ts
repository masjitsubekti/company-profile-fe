import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'artikel'

const fetchAllArtikel = (prams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${prams}`)
const fetchOneArtikel = (id: any) => new Remote(remoteEnum.get, `${baseUrl}/${id}`)
const addArtikel = (data: any) => new Remote(remoteEnum.post, `${baseUrl}`, data)
const editArtikel = (id: any, data: any) => new Remote(remoteEnum.put, `${baseUrl}/${id}`, data)
const deleteArtikel = (id: any) => new Remote(remoteEnum.delete, `${baseUrl}/${id}`)

export {
  fetchAllArtikel,
  addArtikel,
  editArtikel,
  deleteArtikel,
  fetchOneArtikel
}
