export default (context: any) => {
  console.log('any authicanted', context)
  if (!context.store.state.auth.isAuth) {
    context.redirect('/login')
  }
}