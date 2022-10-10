export const FACTORY_ADDRESS = '0x5bb2a9984de4a69c05c996f7ef09597ac8c9d63a'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
// TODO: Looks incorrect?
export const SUPPORTED_LIST_URLS__NO_ENS = ['https://raw.githubusercontent.com/SoulSwapFinance/default-token-list/master/tokens/avalanche.json']
// export const SUPPORTED_LIST_URLS__NO_ENS = ['https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json']

// hide from overview list
export const TOKEN_BLACKLIST = []

// pair blacklist
export const PAIR_BLACKLIST = []

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or Native pairings.'

// tokens that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES = []
/*  */
