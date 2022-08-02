import { ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { StyledButton, StyledButtonProps } from '@/components/StyledButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof StyledButton>

const incrementAction = action('increment')
export const Primary = (props: StyledButtonProps) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    incrementAction(e, count)
    setCount((c) => c + 1)
  }

  return (
    <StyledButton {...props} variant='primary' onClick={onClick}>
      Primary: {count}
    </StyledButton>
  )
}

export const Success = (props: StyledButtonProps) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    incrementAction(e, count)
    setCount((c) => c + 1)
  }

  return (
    <StyledButton {...props} variant='success' onClick={onClick}>
      Success: {count}
    </StyledButton>
  )
}

export const Transparent = (props: StyledButtonProps) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    incrementAction(e, count)
    setCount((c) => c + 1)
  }

  return (
    <StyledButton {...props} variant='transparent' onClick={onClick}>
      Transparent: {count}
    </StyledButton>
  )
}
