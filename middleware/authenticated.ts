export default (context: any) => {
  console.log('any authicanted', context)
  if (!context.store.state.auth.isAuth) {
    return context.redirect({
      name: 'login'
    })
  } else {
    return context.redirect({
      name: 'cms-dashboard'
    })
  }
}