import React from 'react'
import Flex, { type FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack: React.FC<VStackProps> = (props) => {
  const { children, ...rest } = props

  return (
    <Flex direction="column" {...rest}>
      {children}
    </Flex>
  )
}
