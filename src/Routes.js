import Loadable from 'react-loadable'
import LoadingPage from './Components/atom/LoadingPage'

export const AsyncHome = Loadable({
    loader: () => import('./Components/pages/HomePage'),
    loading: LoadingPage,
})
export const AsyncProductList = Loadable({
    loader: () => import('./Components/pages/ProductList'),
    loading: LoadingPage,
})
export const AsyncShop = Loadable({
    loader: () => import('./Components/pages/Shop'),
    loading: LoadingPage,
})
export const AsyncAdminPage = Loadable({
    loader: () => import('./Components/Templates/Admin'),
    loading: LoadingPage,
})
export const AsyncUserProfile = Loadable({
    loader: () => import('./Components/pages/UserProfile'),
    loading: LoadingPage,
})
export const AsyncProductDetail = Loadable({
    loader: () => import('./Components/pages/ProductDetail'),
    loading: LoadingPage,
})