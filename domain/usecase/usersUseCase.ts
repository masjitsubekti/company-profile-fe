import { Response } from '@/domain/entities'
import ICrud from '@/domain/usecase/iCrud'
import Repository from '@/data/repository'
import { fetchAllUser, editUser, addUser, deleteUser } from '~/data/source/remote/api'

class UsersUseCase implements ICrud {
  getAll(filter: any = ''): Promise<Response> {
    return new Repository(fetchAllUser(), null).getResult(false)
  }

  getOne(id: any): Promise<Response> {
    throw new Error('Method not implemented.')
  }

  getDataForm(id: any): Promise<any> {
    throw new Error('Method not implemented.')
  }

  submitData(id: any, data: any): Promise<Response> {
    data.role = 'ADMIN'
    if (id) {
      return new Repository(editUser(data.id, data), null).getResult(false)
    } return new Repository(addUser(data), null).getResult(false)
  }

  deleteData(id: any): Promise<Response> {
    return new Repository(deleteUser(Number(id)), null).getResult(false)
  }

  changeIsActive(data: any): Promise<Response> {
    throw new Error('Method not implemented.')
  }

}

const usersUseCase = new UsersUseCase()

export {
  usersUseCase
}