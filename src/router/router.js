const routesPath = {
  home: '/',
}

const noAuthenRoutes = [
  {
    path: routesPath.home,
    exact: true,
    component: 'overview'
  }
]

export { noAuthenRoutes }
