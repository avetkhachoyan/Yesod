//YesodCoin in swappering
const { sumTokensExport, sumTokens } = require('../helper/unwrapLPs')

const YESOD_TOKEN_CONTRACT = 'to be added'
const YESOD = [
  'to be added',
]

module.exports = {
  methodology: 'Swaps in generalisation exported',
  kava: {
    tvl: sumTokensExport({ YESOD_TOKEN_CONTRACT, YESOD })
  }
}