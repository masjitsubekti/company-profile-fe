import moment from 'moment'

export default (context: any) => {
  const checkDateExpired = () => {
    if (context.store.state.auth.dateAuth && context.store.state.auth.token) {
      const dateLogin = moment(context.store.state.auth.dateAuth)
      const now = moment()

      const checkHours = moment.duration(now.diff(dateLogin)).asHours()

      if (checkHours <= 8) {
        return true
      }                                                                                                                                                                                                                                                                             
    }
    context.store.dispatch('auth/logoutAccount')

    return false
  }
  
  if (checkDateExpired() === false) {
    context.redirect({
      name: 'login'
    })
  }
}