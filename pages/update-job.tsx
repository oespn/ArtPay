
import UpdateJob from '../components/artist/UpdateJob'
import Layout from '../components/common/Layout'
import MetaHead from '../components/common/Layout/MetaHead'

export default function NewQuotePage() {
  return (
    <Layout>
      <MetaHead title="Artpay Dashboard" />
      <UpdateJob />
    </Layout>
  )
}