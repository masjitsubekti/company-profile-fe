import { Response } from '@/domain/entities'
import ICrud from '@/domain/usecase/iCrud'
import Repository from '@/data/repository'
import { fetchAllLayanan, editLayanan, addLayanan, deleteLayanan } from '~/data/source/remote/api'

class LayananUseCase implements ICrud {
  getAll(filter: any = ''): Promise<Response> {
    return new Repository(fetchAllLayanan(), null).getResult(false)
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
      return new Repository(editLayanan(data.id, data), null).getResult(false)
    } return new Repository(addLayanan(data), null).getResult(false)
  }

  deleteData(id: any): Promise<Response> {
    return new Repository(deleteLayanan(Number(id)), null).getResult(false)
  }

  changeIsActive(data: any): Promise<Response> {
    throw new Error('Method not implemented.')
  }

}

const layananUseCase = new LayananUseCase()

export {
  layananUseCase
}