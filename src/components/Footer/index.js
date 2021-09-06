import React from 'react'
import { Flex } from 'rebass'

import Link from '../Link'

const links = [
  { url: 'https://soulswap.finance', text: 'About' },
  { url: 'https://docs.soulswap.finance/', text: 'Docs' },
  { url: 'https://github.com/SoulSwapFinance/soulswap-info', text: 'Code' },
]

const FooterLink = ({ children, ...rest }) => (
  <Link external color="soulswappurple" fontWeight={500} fontSize={12} mr={'8px'} {...rest}>
    {children}
  </Link>
)

const Footer = () => (
  <Flex as="footer" p={24}>
    {links.map((link, index) => (
      <FooterLink key={index} href={link.url}>
        {link.text}
      </FooterLink>
    ))}
  </Flex>
)

export default Footer
