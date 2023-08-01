import { SvgIconProps } from '@mui/material'
import SvgWrapper from './SvgWrapper'

export default function OpenBookOutlinedIcon(props: SvgIconProps) {
  const { strokeWidth, ...rest } = props
  const thick = strokeWidth == 'thick'

  return (
    <SvgWrapper {...rest}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={ thick ? '2' : '1' }
        d='M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706'
      />
    </SvgWrapper>
  )
}
