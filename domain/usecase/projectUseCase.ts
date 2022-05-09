import { Response } from '@/domain/entities'
import ICrud from '@/domain/usecase/iCrud'
import Repository from '@/data/repository'
import { fetchAllProject, editProject, addProject, deleteProject } from '~/data/source/remote/api'

class ProjectUseCase implements ICrud {
  getAll(filter: any = ''): Promise<Response> {
    return new Repository(fetchAllProject(), null).getResult(false)
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
      return new Repository(editProject(data.id, data), null).getResult(false)
    } return new Repository(addProject(data), null).getResult(false)
  }

  deleteData(id: any): Promise<Response> {
    return new Repository(deleteProject(Number(id)), null).getResult(false)
  }

  changeIsActive(data: any): Promise<Response> {
    throw new Error('Method not implemented.')
  }

}

const projectUseCase = new ProjectUseCase()

export {
  projectUseCase
}