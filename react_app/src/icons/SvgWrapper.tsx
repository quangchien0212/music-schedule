import { styled } from '@mui/material';
import React from 'react'

export type SvgIconProps = React.SVGProps<SVGSVGElement> & {
  strokeWidth?: 'thin' | 'thick'
}

const Svg = styled('svg')({
  verticalAlign: 'middle',
});

export default function SvgWrapper(props: SvgIconProps) {
  const { width = 16, height = 16, ...rest } = props

  return (
    <Svg
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 20 18'
      width={width}
      height={height}
      {...rest}
    />
  )
}
