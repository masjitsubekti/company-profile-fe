import { Response } from '@/domain/entities'
import ICrud from '@/domain/usecase/iCrud'
import Repository from '@/data/repository'
import { fetchAllArtikel, editArtikel, addArtikel, deleteArtikel, fetchOneArtikel } from '~/data/source/remote/api'

class ArtikelUseCase implements ICrud {
  getAll(filter: any = ''): Promise<Response> {
    return new Repository(fetchAllArtikel(), null).getResult(false)
  }

  async getDataForm(id: any): Promise<any> {
    if (id) {
      const Id = Number(id)
      const response = await new Repository(fetchOneArtikel(Id), null).getResult(false)
      return {
        title: 'Edit Artikel',
        data: response
      }
    } return {
      title: 'Tambah Artikel',
      data: null
    }
  }

  submitData(id: any, data: any): Promise<Response> {
    if (id) {
      data.id = Number(id)
      return new Repository(editArtikel(data.id, data), null).getResult(false)
    } return new Repository(addArtikel(data), null).getResult(false)
  }

  deleteData(id: any): Promise<Response> {
    return new Repository(deleteArtikel(Number(id)), null).getResult(false)
  }

  changeIsActive(data: any): Promise<Response> {
    throw new Error('Method not implemented.')
  }

}

const artikelUseCase = new ArtikelUseCase()

export {
  artikelUseCase
}