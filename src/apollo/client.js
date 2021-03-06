import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/paint-swap-finance/exchange',
    // uri: 'https://api.thegraph.com/subgraphs/name/soulswapfinance/fantom-exchange',
    uri: 'https://api.thegraph.com/subgraphs/name/soulswapfinance/fantom-soulswap',
    // uri: 'https://api.thegraph.com/subgraphs/name/soulswapfinance/fantom',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

// TODO: We need this?
export const stakingClient = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
    uri: 'https://api.thegraph.com/subgraphs/name/soulswapfinance/soul-summoner',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/matthewlilley/fantom-blocks',
  }),
  cache: new InMemoryCache(),
})
