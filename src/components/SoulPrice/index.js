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

export default function SoulPrice() {
  const daiPair = usePairData('0x864384a54ea644852603778c0C200eF2D6F2Ac2f')
  const usdcPair = usePairData('0x922fcADa825Dc669798206A35D2D2B455f9A64E7')

  const totalLiquidity = useMemo(() => {
    return daiPair && usdcPair
      ? daiPair.trackedReserveUSD + usdcPair.trackedReserveUSD
      : 0
  }, [daiPair, usdcPair])

  const daiPerAvax = daiPair ? parseFloat(daiPair.token1Price).toFixed(2) : '-'
  const usdcPerAvax = usdcPair ? parseFloat(usdcPair.token0Price).toFixed(2) : '-'

  return (
    <PriceCard>
      <AutoColumn gap="10px">
        <RowFixed>
          <TYPE.main>DAI/AVAX: {formattedNum(daiPerAvax, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {daiPair && totalLiquidity ? formatPercent(daiPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>
        <RowFixed>
          <TYPE.main>USDC/AVAX: {formattedNum(usdcPerAvax, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {usdcPair && totalLiquidity ? formatPercent(usdcPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>
      </AutoColumn>
    </PriceCard>
  )
}
