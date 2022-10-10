interface BasicData {
  token0?: {
    id: string
    name: string
    symbol: string
  }
  token1?: {
    id: string
    name: string
    symbol: string
  }
}

// Override data return from graph - usually because proxy token has changed
// names since entity was created in subgraph
// keys are lowercase token addresses <--------
const TOKEN_OVERRIDES: { [address: string]: { name: string; symbol: string } } = {
  '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7': {
    name: 'Avalanche',
    symbol: 'AVAX',
  },
  '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab': {
    name: 'Wrapped Ethereum',
    symbol: 'ETH',
  },
  '0x11d6dd25c1695764e64f439e32cc7746f3945543': {
    name: 'Soul Power',
    symbol: 'SOUL',
  },
  '0xd586e7f844cea2f87f50152665bcbc2c279d8d70': {
    name: 'Dai Stablecoin',
    symbol: 'DAI',
  },
  '0x50b7545627a5162f82a992c33b87adc75187b218': {
    name: 'Wrapped Bitcoin',
    symbol: 'BTC',
  },
}

// override tokens with incorrect symbol or names
export function updateNameData(data: BasicData): BasicData | undefined {
  if (data?.token0?.id && Object.keys(TOKEN_OVERRIDES).includes(data.token0.id)) {
    data.token0.name = TOKEN_OVERRIDES[data.token0.id].name
    data.token0.symbol = TOKEN_OVERRIDES[data.token0.id].symbol
  }

  if (data?.token1?.id && Object.keys(TOKEN_OVERRIDES).includes(data.token1.id)) {
    data.token1.name = TOKEN_OVERRIDES[data.token1.id].name
    data.token1.symbol = TOKEN_OVERRIDES[data.token1.id].symbol
  }

  return data
}
