'use client'

import Dropdown from '@/components/globals/Dropdown'
import Icons from '@/components/globals/Icons'
import Links from '../Links'

export default function MenuDropdown() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <Icons.Lucide.Menu size={32} />
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content align="end" className="p-4">
          <Links showLogo={false} />
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}
