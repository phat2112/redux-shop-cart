import Loadable from 'react-loadable'
import LoadingPage from './Components/atom/LoadingPage'

export const AsyncHome = Loadable({
    loader: () => import('./Components/pages/HomePage'),
    loading: LoadingPage,
})
export const AsyncShop = Loadable({
    loader: () => import('./Components/pages/Shop'),
    loading: LoadingPage,
})
