import SvgWrapper from './SvgWrapper'
import { SvgIconProps } from '@mui/material'

export default function UsersOutlinedIcon(props: SvgIconProps) {
  const { strokeWidth, ...rest } = props
  const thick = strokeWidth == 'thick'

  return (
    <SvgWrapper {...rest}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={ thick ? '2' : '1' }
        d='M14 3a3 3 0 1 1-1.614 5.53M15 12a4 4 0 0 1 4 4v1h-3.348M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z'
      />
    </SvgWrapper>
  )
}
