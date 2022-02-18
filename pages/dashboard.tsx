import { Children } from 'react';
import LayoutHeader from '../components/common/Layout/LayoutHeader'
import MetaHead from '../components/common/Layout/MetaHead'
import Dashboard from '../components/Dashboard'

export default function Home() {

  const isClient: boolean = true;

  return (
    <LayoutHeader {...isClient} >
      <MetaHead title="Artpay Dashboard" />
      <Dashboard {...isClient} />
    </LayoutHeader>
  )
}
