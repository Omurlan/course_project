import React from 'react'
import Button from 'shared/ui/Button/Button'

const AboutPage = () => {
  return <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap' }}>
    <Button>Default</Button>
    <Button disabled>Default disabled</Button>

    <Button variant="neutral">Neutral</Button>
    <Button variant="neutral" disabled>Neutral disabled</Button>

    <Button variant="outline">Outline</Button>
    <Button variant="outline" disabled>Outline disabled</Button>

    <Button variant="ghost">Ghost</Button>
    <Button variant="ghost" disabled>Ghost disabled</Button>
  </div>
}

export default AboutPage
