import React from 'react' // { useState }
import styled from 'styled-components'
import { RowFixed, RowBetween } from '../Row'
import { useMedia } from 'react-use'
import { useGlobalData } from '../../contexts/GlobalData' // useFtmPrice
import { formattedNum } from '../../utils' // localNumber

// import UniPrice from '../UniPrice'
import { TYPE } from '../../Theme'

const Header = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
`

const Medium = styled.span`
  font-weight: 500;
`

export default function GlobalStats() {
  // const below1295 = useMedia('(max-width: 1295px)')
  // const below1180 = useMedia('(max-width: 1180px)')
  // const below1024 = useMedia('(max-width: 1024px)')
  // const below400 = useMedia('(max-width: 400px)')
  const below816 = useMedia('(max-width: 816px)')

  // const [showPriceCard, setShowPriceCard] = useState(false)

  const { totalVolumeUSD } = useGlobalData() // oneDayVolumeUSD, txCount, pairCount
  // const [ethPrice] = useFtmPrice()
  // const formattedEthPrice = ethPrice ? formattedNum(ethPrice, true) : '-'
  // const oneDayFees = oneDayVolumeUSD ? formattedNum(oneDayVolumeUSD * 0.003, true) : ''
  const totalFees = totalVolumeUSD ? formattedNum(totalVolumeUSD * 0.003, true) : ''

  return (
    <Header>
      <RowBetween style={{ padding: below816 ? '0.5rem' : '.5rem' }}>
        <RowFixed>
          {/* {!below400 && (
            <TYPE.main
              mr={'1rem'}
              onMouseEnter={() => {
                setShowPriceCard(true)
              }}
              onMouseLeave={() => {
                setShowPriceCard(false)
              }}
              style={{ position: 'relative' }}
            >
              FTM: <Medium>{formattedEthPrice}</Medium>
              {showPriceCard && <UniPrice />}
            </TYPE.main>
          )} */}

            <TYPE.main mr={'1rem'}>
              Volume: <Medium>{formattedNum(totalVolumeUSD, true)}</Medium>
            </TYPE.main>            
            {/* <TYPE.main mr={'1rem'}>
              Transactions: <Medium>{localNumber(txCount)}</Medium>
            </TYPE.main> */}
            <TYPE.main mr={'1rem'}>
              Fees: <Medium>{totalFees}</Medium>&nbsp;
            </TYPE.main>
        </RowFixed>
      </RowBetween>
    </Header>
  )
}
