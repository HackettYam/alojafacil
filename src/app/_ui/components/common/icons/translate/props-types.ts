import type { MouseEvent } from 'react'
import type { IconButtonProps } from '@mui/material'

export interface TranslateIconProps extends Omit<IconButtonProps, 'size' | 'color'> {
  color?: string
  onPress?: (e: MouseEvent<HTMLElement>) => void
  size?: number
}
