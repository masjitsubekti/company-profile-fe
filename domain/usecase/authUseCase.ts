import { Response } from '@/domain/entities'
import ICrud from '@/domain/usecase/iCrud'
import Repository from '@/data/repository'
import { login, fetchOneGetUser, fetchLogout } from '~/data/source/remote/api'

class AuthUseCase {
  loginProcess(email: string, password: string): any {
    const data = new FormData()
    data.append('email', email)
    data.append('password', password)

    return new Repository(login(data), null).getResult(false)
  }

  getDetailUser(token: string): any {
    const queryPrams = `?token=${token}`
    return new Repository(fetchOneGetUser(queryPrams), null).getResult(false)
  }

  logoutProcess(token: string): any {
    const queryPrams = `?token=${token}`
    return new Repository(fetchLogout(queryPrams), null).getResult(false)
  }

}

const authUseCase = new AuthUseCase()

export {
  authUseCase
}