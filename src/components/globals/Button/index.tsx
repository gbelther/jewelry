import React from 'react'
import { cn } from '@/utils/cn'

const Button = React.forwardRef<
  React.ElementRef<'button'>,
  React.ComponentPropsWithoutRef<'button'>
>(({ className, ...rest }, ref) => {
  return (
    <button
      {...rest}
      className={cn(
        'rounded-lg border border-primary-700 bg-primary-700 px-2 py-1 font-medium text-white transition-all hover:brightness-90 active:brightness-75',
        className,
      )}
      ref={ref}
    />
  )
})
Button.displayName = 'JWButton'

export default Button
