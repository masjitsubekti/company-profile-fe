import moment from 'moment'

export default (context: any) => {
  console.log('any authicanted', context)
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
  if (!context.store.state.auth.isAuth) {
    context.redirect({
      name: 'login'
    })
  }
  if (checkDateExpired() === false) {
    context.redirect({
      name: 'login'
    })
  }
}