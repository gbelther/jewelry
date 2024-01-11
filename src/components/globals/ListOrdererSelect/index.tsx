'use client'

import { ListOrdererVariant } from '@/@types'
import Dropdown from '../Dropdown'
import { getListOrdererTypesTranslated } from '@/utils/getListOrdererTypesTranslated'

type Props = {
  item: ListOrdererVariant
  onSelect: (item: ListOrdererVariant) => void
}

export default function ListOrdererSelect({ item, onSelect }: Props) {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <button className="rounded border border-gray-700 px-2 py-1 text-xs hover:bg-gray-100">
          {getListOrdererTypesTranslated(item)}
        </button>
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content align="end">
          <Dropdown.Item
            className="cursor-pointer select-none rounded px-2 py-1 leading-none outline-none data-[highlighted]:bg-primary-100"
            onSelect={() => onSelect('relevance')}
          >
            {getListOrdererTypesTranslated('relevance')}
          </Dropdown.Item>
          <Dropdown.Item
            className="cursor-pointer select-none rounded px-2 py-1 leading-none outline-none data-[highlighted]:bg-primary-100"
            onSelect={() => onSelect('price-asc')}
          >
            {getListOrdererTypesTranslated('price-asc')}
          </Dropdown.Item>
          <Dropdown.Item
            className="cursor-pointer select-none rounded px-2 py-1 leading-none outline-none data-[highlighted]:bg-primary-100"
            onSelect={() => onSelect('price-desc')}
          >
            {getListOrdererTypesTranslated('price-desc')}
          </Dropdown.Item>
          <Dropdown.Item
            className="cursor-pointer select-none rounded px-2 py-1 leading-none outline-none data-[highlighted]:bg-primary-100"
            onSelect={() => onSelect('alphabetical-asc')}
          >
            {getListOrdererTypesTranslated('alphabetical-asc')}
          </Dropdown.Item>
          <Dropdown.Item
            className="cursor-pointer select-none rounded px-2 py-1 leading-none outline-none data-[highlighted]:bg-primary-100"
            onSelect={() => onSelect('alphabetical-desc')}
          >
            {getListOrdererTypesTranslated('alphabetical-desc')}
          </Dropdown.Item>
          <Dropdown.Arrow />
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}
