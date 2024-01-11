import React from 'react'
import { cn } from '@/utils/cn'
import Icons from '../Icons'

const Spinner = React.forwardRef<
  React.ElementRef<typeof Icons.Lucide.Loader>,
  React.ComponentPropsWithoutRef<typeof Icons.Lucide.Loader>
>(({ className, size = 24, ...rest }, ref) => {
  return (
    <Icons.Lucide.Loader
      {...rest}
      size={size}
      className={cn('animate-spin text-primary-700', className)}
      ref={ref}
    />
  )
})
Spinner.displayName = 'Spinner'

export default Spinner
