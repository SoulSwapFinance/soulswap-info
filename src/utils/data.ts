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
  '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83': {
    name: 'Fantom (Wrapped)',
    symbol: 'FTM',
  },
  '0x74b23882a30290451a17c44f4f05243b6b58c76d': {
    name: 'Ether (Wrapped)',
    symbol: 'ETH',
  },
  '0xe2fb177009ff39f52c0134e8007fa0e4baacbd07': {
    name: 'Soul Power',
    symbol: 'SOUL',
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
