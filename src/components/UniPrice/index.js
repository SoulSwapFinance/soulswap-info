import React, { useMemo } from 'react'
import styled from 'styled-components'
import Panel from '../Panel'
import { AutoColumn } from '../Column'
import { RowFixed } from '../Row'
import { TYPE } from '../../Theme'
import { usePairData } from '../../contexts/PairData'
import { formattedNum } from '../../utils'

const PriceCard = styled(Panel)`
  position: absolute;
  right: -220px;
  width: 220px;
  top: -20px;
  z-index: 9999;
  height: fit-content;
  background-color: ${({ theme }) => theme.bg1};
`

function formatPercent(rawPercent) {
  if (rawPercent < 0.01) {
    return '<1%'
  } else return parseFloat(rawPercent * 100).toFixed(0) + '%'
}

export default function UniPrice() {
  const daiPair = usePairData('0xF3d6E8Ecece8647B456d57375Ce0B51B8F0cD40b') // 11 SEP
  const usdcPair = usePairData('0x160653F02b6597E7Db00BA8cA826cf43D2f39556') // 11 SEP
  const fusdPair = usePairData('0x1AE16105a7d4bE7DFD9737FD13D9A50AEFed1437') // 11 SEP

  const totalLiquidity = useMemo(() => {
    return daiPair && usdcPair && fusdPair
      ? daiPair.trackedReserveUSD + usdcPair.trackedReserveUSD + fusdPair.trackedReserveUSD
      : 0
  }, [daiPair, usdcPair, fusdPair])

  const daiPerEth = daiPair ? parseFloat(daiPair.token1Price).toFixed(2) : '-'
  const usdcPerEth = usdcPair ? parseFloat(usdcPair.token0Price).toFixed(2) : '-'
  const fusdPerEth = fusdPair ? parseFloat(fusdPair.token0Price).toFixed(2) : '-'

  return (
    <PriceCard>
      <AutoColumn gap="10px">
        <RowFixed>
          <TYPE.main>DAI/FTM: {formattedNum(daiPerEth, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {daiPair && totalLiquidity ? formatPercent(daiPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>
        <RowFixed>
          <TYPE.main>USDC/FTM: {formattedNum(usdcPerEth, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {usdcPair && totalLiquidity ? formatPercent(usdcPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>
        <RowFixed>
          <TYPE.main>FUSD/FTM: {formattedNum(fusdPerEth, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {fusdPair && totalLiquidity ? formatPercent(fusdPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>
      </AutoColumn>
    </PriceCard>
  )
}
