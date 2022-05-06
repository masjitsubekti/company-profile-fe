import { Response } from '@/domain/entities'
import ICrud from '@/domain/usecase/iCrud'
import Repository from '@/data/repository'
import { fetchAllJenisProject, editJenisProject, addJenisProject, deleteJenisProject } from '~/data/source/remote/api'

class JenisProjectUseCase implements ICrud {
  getAll(filter: any = ''): Promise<Response> {
    return new Repository(fetchAllJenisProject(), null).getResult(false)
  }

  getOne(id: any): Promise<Response> {
    throw new Error('Method not implemented.')
  }

  getDataForm(id: any): Promise<any> {
    throw new Error('Method not implemented.')
  }

  submitData(id: any, data: any): Promise<Response> {
    if (id) {
      data.id = Number(id)
      return new Repository(editJenisProject(data.id, data), null).getResult(false)
    } return new Repository(addJenisProject(data), null).getResult(false)
  }

  deleteData(id: any): Promise<Response> {
    return new Repository(deleteJenisProject(Number(id)), null).getResult(false)
  }

  changeIsActive(data: any): Promise<Response> {
    throw new Error('Method not implemented.')
  }

}

const jenisProjectUseCase = new JenisProjectUseCase()

export {
  jenisProjectUseCase
}