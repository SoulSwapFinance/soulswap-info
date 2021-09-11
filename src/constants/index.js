export const FACTORY_ADDRESS = '0x733A9D1585f2d14c77b49d39BC7d7dd14CdA4aa5'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
// TODO: Looks incorrect?
export const SUPPORTED_LIST_URLS__NO_ENS = ['https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json']

// hide from overview list
export const TOKEN_BLACKLIST = [
  '0xdea0102f2d45a944a720a1cdef87ec8366ea04f5',
  '0x3c393ed453c1017315d4401f6097ea4b944c06ac',
  '0xabfa442e3fd37934b082b9a1d2b55ace586c076b',
  '0x9c72fa15ec3fa2a449101a915a578c1e5f3a7d47',
  '0x32c9ea5622fcdc0aff239316a9d3513f1d484367',
  '0x694e59a6a95ba63fe3923eebdc94b8f0fa1bf5ea',
  '0x6e0aa9718c56ef5d19ccf57955284c7cd95737be',
  '0x4c89b40ea5408786e158b60c2711c8d28e7ad32d',
  '0xe4ef5a727ef598722bddc8c6ec33a31258d6a42f',
  '0xfd3b077dc97915ab3a49db1b1021c13ad55751dc',
  '0x0bbf5349d884d135a907040187e0f4e04d05129c',
  '0x3d5f8fb7e5de6bf2c1944d24c94ef48b84ad13c6',
  '0x0affa8225b51e8f6b365c71dbfb6d7d26d525e61', // dummy brush
  '0xbaf503dfc9d8ecb24d0f493f3e54e69cfb814c7f', // dummy brush
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0xba7a6410f522edd721ce9eceac083e93dffbb6b4',
  '0x1784cd462a92acca3e77407ca850f400eb3e6b96',
  '0xba7a6410f522edd721ce9eceac083e93dffbb6b4',
  '0xd91383812f5cc19bad2878d561309e072f025ed6',
  '0x8e84d55862facabd85d4d40060d3236803c3a4b3',
  '0x8703222ec3b177c7c9cc9b257478cff46c484a24',
  '0xe0c2a9f0f9f0bffc4520111b68a40dcf9f74cf24',
  '0x5c88d0b3f0353a91372b427098fc4386502751ad',
  '0x9661a8fcd5df4747b0caf09718d29014f878330a',
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or FTM pairings.'

// tokens that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES = []
/*
  '0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3', // ftm-btc
  '0x623ee4a7f290d11c11315994db70fb148b13021d', // ftm-ice
  '0xebf374bb21d83cf010cc7363918776adf6ff2bf6', // ftm-aave
  '0x1c94665fd3ecfa969feda7ed01e35522e6982022', // ftm-badger
  '0x91b39d5584e2a7dc829f696235742cc293f2e8cf', // ftm-band
  '0x5dc7848bf215f1d99f2af3d2bf78fcdf238ee34b', // ftm-cover
  '0xb471ac6ef617e952b84c6a9ff5de65a9da96c93b', // crv-ftm
  '0xe120ffbda0d14f3bb6d6053e90e63c572a66a428', // ftm-dai
  '0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410', // fusdt-ftm
  '0x89d9bc2f2d091cfbfc31e333d6dc555ddbc2fd29', // ftm-link
  '0x01424c64c4744769299019be64f3d82898ff28f3', // ftm-sfi
  '0x06d173628be105fe81f1c82c9979ba79ebcafcb7', // ftm-snx
  '0xf84e313b36e86315af7a06ff26c8b20e9eb443c3', // ftm-sushi
  '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c', // usdc-ftm
  '0xf0702249f4d3a25cd3ded7859a165693685ab577', // ftm-weth
  '0xbf4d61d4cec3a9dff7452d8987e1cc2943e2eb4c', // ftm-yfi
  '0xb77b223490e1f5951ec79a8d09db9eab2adcb934' // ftm-cream
  */
