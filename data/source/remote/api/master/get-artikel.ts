import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'get-artikel'

const fetchGetArtikel = (queryPrams: any = '') => new Remote(remoteEnum.get, `${baseUrl}${queryPrams}`)
const fetchAllGetArtikel = () => new Remote(remoteEnum.get, `${baseUrl}/all`)
const fetchOneGetArtikel = (id: any = '') => new Remote(remoteEnum.get, `${baseUrl}/${id}`)

export {
  fetchAllGetArtikel,
  fetchOneGetArtikel,
  fetchGetArtikel
}