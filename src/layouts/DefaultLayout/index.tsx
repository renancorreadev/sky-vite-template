import { Header } from '@components'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
