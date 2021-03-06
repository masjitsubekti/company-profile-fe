import { Response } from '@/domain/entities'
import ICrud from '@/domain/usecase/iCrud'
import Repository from '@/data/repository'
import { fetchAllArtikel, editArtikel, addArtikel, deleteArtikel, fetchOneArtikel, fetchGetArtikel, fetchOneGetArtikel, editArtikelUpdate, fetchOneGetProject } from '~/data/source/remote/api'

class ArtikelUseCase implements ICrud {
  getAll(filter: any = ''): Promise<Response> {
    return new Repository(fetchAllArtikel(filter), null).getResult(false)
  }

  getNoAuthor(filter: any = ''): Promise<Response> {
    return new Repository(fetchGetArtikel(filter), null).getResult(false)
  }

  getOneNoAuthor(id: any): Promise<Response> {
    // return new Repository(fetchOneGetProject(id), null).getResult(false)
    return new Repository(fetchOneGetArtikel(id), null).getResult(false)
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
      return new Repository(editArtikelUpdate(data), null).getResult(false)
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