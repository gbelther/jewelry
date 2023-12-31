import { cn } from '@/libs/tailwindMerge'
import LinkNext from 'next/link'
import React, { forwardRef } from 'react'

const Link = forwardRef<
  React.ElementRef<typeof LinkNext>,
  React.ComponentPropsWithoutRef<typeof LinkNext>
>(({ className, ...rest }, ref) => {
  return (
    <LinkNext
      {...rest}
      className={cn('text-gray-700 hover:text-gray-950', className)}
      ref={ref}
    />
  )
})
Link.displayName = 'JWLink'

export default Link
