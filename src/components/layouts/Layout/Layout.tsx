import { AppShell, Container } from '@mantine/core'
import React from 'react'

import { HeaderNested } from '../../organisms/HeaderNested'

type Props = {
  children?: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <AppShell header={<HeaderNested/>}>
      <Container>
        {children}
      </Container>
    </AppShell>
  )
}
