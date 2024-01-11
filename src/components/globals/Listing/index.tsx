import React from 'react'
import { cn } from '@/utils/cn'

function List({ className, ...rest }: React.ComponentPropsWithoutRef<'ul'>) {
  return (
    <ul
      className={cn(
        'grid list-none grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8',
        className,
      )}
      {...rest}
    />
  )
}
List.displayName = 'Listing.List'

function Item(props: React.ComponentPropsWithoutRef<'li'>) {
  return <li {...props} />
}
Item.displayName = 'Listing.Item'

const Listing = {
  List,
  Item,
}

export default Listing
