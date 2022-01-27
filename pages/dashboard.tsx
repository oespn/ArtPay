import Layout from '../components/common/Layout'
import MetaHead from '../components/common/Layout/MetaHead'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <Layout>
      <MetaHead title="Artpay Dashboard" />
      <Dashboard />
    </Layout>
  )
}
