import { Header, Title } from '@mantine/core'

export const HeaderNested = () => {
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Title order={4}>Huffymail</Title>
      </div>
    </Header>
  )
}
