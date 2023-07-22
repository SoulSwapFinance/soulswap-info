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

export default function SoulPrice() {)
  const usdcPair = usePairData('0xd1a432df5ee2df3f891f835854ffea072c273c65') 
  // FTM-axlUSDC
  const totalLiquidity = useMemo(() => {
    return usdcPair
      ? usdcPair.trackedReserveUSD
      : 0
  }, [usdcPair])

  // const daiPerFtm = daiPair ? parseFloat(daiPair.token1Price).toFixed(2) : '-'
  const usdcPerFtm = usdcPair ? parseFloat(usdcPair.token0Price).toFixed(2) : '-' 
    // (0) axlUSDC
  // const fusdPerFtm = fusdPair ? parseFloat(fusdPair.token1Price).toFixed(2) : '-'

  return (
    <PriceCard>
      <AutoColumn gap="10px">
        <RowFixed>
          <TYPE.main>USDC/FTM: {formattedNum(usdcPerFtm, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {usdcPair && totalLiquidity 
              ? formatPercent(usdcPair.trackedReserveUSD / totalLiquidity) 
              : '-'
            }
          </TYPE.light>
        </RowFixed>
      </AutoColumn>
    </PriceCard>
  )
}
