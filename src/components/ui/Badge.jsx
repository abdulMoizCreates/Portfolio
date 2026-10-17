import { badgeClasses } from './styles'

export function Badge({ variant = 'default', className = '', children, ...props }) {
  return (
    <span className={badgeClasses({ variant, className })} {...props}>
      {children}
    </span>
  )
}

export default Badge
