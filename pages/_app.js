import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import '../styles/index.scss'
import 'antd/dist/antd.css'

export default function App ({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
