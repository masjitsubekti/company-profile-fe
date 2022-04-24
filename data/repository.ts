/* eslint-disable class-methods-use-this */
// import networkBoundResource from '@/data/networkBoundResource'
import store from '@/store'
import { Response } from '@/domain/entities'

class Repository {
  remote: any

  sourceDb: any

  savingData: any

  constructor(remote: any, sourceDb: any, savingData: any = null) {
    this.remote = remote
    this.sourceDb = sourceDb
    if (savingData) {
      this.savingData = savingData
    }
  }

  private result = async (haveLocal: boolean) => {
    const data = new Response()
    try {
      const fetch = await this.fetchData().run()
      console.log('repository', fetch)
      const code = fetch.status
      const result = fetch.data
      if (code === 201) {
        data.result = fetch.data
        data.message = fetch.data.Detail
      } else if (code === 200) {
        // eslint-disable-next-line no-prototype-builtins
        if (typeof result.value === 'object' || Array.isArray(result.value)) {
          data.result = result.value
        } else {
          data.result = result
        }
        data.message = 'berhasil ditampilkan'
      } else {
        data.error = true
        data.message = `${fetch.data.Header} ${fetch.data.Detail}`
        data.result = fetch.data.value
      }
      if ('@odata.count' in result) {
        data.count = result['@odata.count']
      }
      data.code = fetch.status
    } catch (e: any) {
      if (typeof e.response === 'undefined') {
        data.error = true
        data.message = 'A network error occurred. This could be a CORS issue or a dropped internet connection. It is not possible for us to know.'
        data.result = ''
        // return Promise.reject(e)
        return data
      }
      if (e.response.status === 400) {
        data.error = true
        data.message = `${e.response.data.Header} ${e.response.data.Detail}`
        data.code = (e.response) ? e.request.status : 400
      } else if (e.response.status === 401) {
        data.error = true
        data.message = `${e.response.data.Header} ${e.response.data.Detail}`
        data.code = (e.response) ? e.request.status : 401
      } else {
        data.error = true
        data.message = 'Gagal mengambil data'
        data.code = (e.response) ? e.request.status : 500
      }
    }
    // if (haveLocal) {
    //   this.saveResultData(data)
    // }
    return data
  }

  loadFromDB() {
    return this.sourceDb
  }

  fetchData() {
    return this.remote
  }

  saveResultData(data: any): void {
    this.sourceDb.changeData(data)
    this.loadFromDB().run()
    console.log('save result data', data)
  }

  getResult = async (haveLocal: boolean): Promise<Response> => {
    const data = await this.result(haveLocal)
    return data
  }
}

export default Repository
