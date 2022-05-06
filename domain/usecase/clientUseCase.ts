import { Response } from '@/domain/entities'
import ICrud from '@/domain/usecase/iCrud'
import Repository from '@/data/repository'
import { fetchAllClient, editClient, addClient, deleteClient } from '~/data/source/remote/api'

class ClientUseCase implements ICrud {
  getAll(filter: any = ''): Promise<Response> {
    return new Repository(fetchAllClient(), null).getResult(false)
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
      return new Repository(editClient(data.id, data), null).getResult(false)
    } return new Repository(addClient(data), null).getResult(false)
  }

  deleteData(id: any): Promise<Response> {
    return new Repository(deleteClient(Number(id)), null).getResult(false)
  }

  changeIsActive(data: any): Promise<Response> {
    throw new Error('Method not implemented.')
  }

}

const clientUseCase = new ClientUseCase()

export {
  clientUseCase
}