import SvgWrapper from './SvgWrapper'
import { SvgIconProps } from '@mui/material'

export default function WindowRestoreOutlineIcon(props: SvgIconProps) {
  const { strokeWidth, ...rest } = props
  const thick = strokeWidth == 'thick'

  return (
    <SvgWrapper {...rest}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={ thick ? '2' : '1' }
        d='M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1M1 9h14M2 5h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z'
      />
    </SvgWrapper>
  )
}
