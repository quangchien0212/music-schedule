import SvgWrapper from './SvgWrapper'
import { SvgIconProps } from '@mui/material'

export default function BarsFromLeftOutlinedIcon(props: SvgIconProps) {
  const { strokeWidth, ...rest } = props
  const thick = strokeWidth == 'thick'

  return (
    <SvgWrapper {...rest} viewBox='0 0 16 12'>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={thick ? '2' : '1'}
        d='M1 1h14M1 6h14M1 11h7'
      />
    </SvgWrapper>
  )
}
