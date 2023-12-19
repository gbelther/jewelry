import Icons from '@/components/globals/Icons'

type Props = {
  rating: number
}

export default function Rating({ rating }: Props) {
  return (
    <div
      className="flex items-center justify-center gap-1"
      title={rating.toString()}
    >
      <Icons.Lucide.Star
        size={16}
        data-state={rating >= 0.5 ? 'filled' : ''}
        className="fill-gray-300 text-gray-300 data-[state=filled]:fill-yellow-400 data-[state=filled]:text-yellow-400"
      />
      <Icons.Lucide.Star
        size={16}
        data-state={rating >= 2 ? 'filled' : ''}
        className="fill-gray-300 text-gray-300 data-[state=filled]:fill-yellow-400 data-[state=filled]:text-yellow-400"
      />
      <Icons.Lucide.Star
        size={16}
        data-state={rating >= 3 ? 'filled' : ''}
        className="fill-gray-300 text-gray-300 data-[state=filled]:fill-yellow-400 data-[state=filled]:text-yellow-400"
      />
      <Icons.Lucide.Star
        size={16}
        data-state={rating >= 4 ? 'filled' : ''}
        className="fill-gray-300 text-gray-300 data-[state=filled]:fill-yellow-400 data-[state=filled]:text-yellow-400"
      />
      <Icons.Lucide.Star
        size={16}
        data-state={rating >= 5 ? 'filled' : ''}
        className="fill-gray-300 text-gray-300 data-[state=filled]:fill-yellow-400 data-[state=filled]:text-yellow-400"
      />
    </div>
  )
}
