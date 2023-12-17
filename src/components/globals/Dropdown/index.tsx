import React from 'react'
import * as ReactDropdown from '@radix-ui/react-dropdown-menu'
import { cn } from '@/utils/cn'

const Content = React.forwardRef<
  React.ElementRef<typeof ReactDropdown.Content>,
  React.ComponentPropsWithoutRef<typeof ReactDropdown.Content>
>(({ className, ...rest }, ref) => (
  <ReactDropdown.Content
    {...rest}
    className={cn('rounded border border-gray-300 bg-white p-1', className)}
    ref={ref}
  />
))
Content.displayName = 'DropdownContent'

const Dropdown = {
  ...ReactDropdown,
  Content: Content,
}

export default Dropdown
