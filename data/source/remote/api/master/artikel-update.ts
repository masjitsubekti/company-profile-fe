import { Remote, remoteEnum } from '@/data/source/remote/remote'

const baseUrl = 'artikel-update'

const editArtikelUpdate = (data: any) => new Remote(remoteEnum.post, `${baseUrl}`, data)

export {
  editArtikelUpdate
}
