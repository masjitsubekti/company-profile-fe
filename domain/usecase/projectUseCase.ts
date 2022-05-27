import { Response } from '@/domain/entities'
import ICrud from '@/domain/usecase/iCrud'
import Repository from '@/data/repository'
import { fetchAllProject, editProject, addProject, deleteProject, fetchOneProject, addPhotoProject, deletePhotoProject } from '~/data/source/remote/api'

class ProjectUseCase implements ICrud {
  getAll(filter: any = ''): Promise<Response> {
    return new Repository(fetchAllProject(), null).getResult(false)
  }

  async getDataForm(id: any): Promise<any> {
    if (id) {
      const Id = Number(id)
      const response = await new Repository(fetchOneProject(Id), null).getResult(false)
      return {
        title: 'Edit Project',
        data: response
      }
    } return {
      title: 'Tambah Project',
      data: null
    }
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

  changeIsActive(data: any): Promise<any> {
    throw new Error('Method not implemented.')
  }

  async uploadPhotoMultiple(id: any, data: any): Promise<any> {
    const result = []
    for (let i = 0; i < data.length; i++) {
      const dataLoop = data[i]
      const formData = new FormData()
      formData.append('id_project', id)
      formData.append('file', dataLoop.image)

      const response = await new Repository(addPhotoProject(formData), null).getResult(false)
      result.push(response)
    }
    return result
  }

  deletePhoto(id: any): Promise<Response> {
    return new Repository(deletePhotoProject(Number(id)), null).getResult(false)
  }

}

const projectUseCase = new ProjectUseCase()

export {
  projectUseCase
}