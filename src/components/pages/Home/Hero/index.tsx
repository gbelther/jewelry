import Button from '@/components/globals/Button'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="h-[calc(100dvh-5rem)] select-none bg-gray-200 bg-hero-image bg-cover bg-[90%] bg-no-repeat">
      <div className="flex h-full flex-col justify-evenly bg-black/70 px-6 py-2 text-center text-white md:bg-transparent md:text-left md:text-black">
        <div>
          <h3>Presenteie com</h3>
          <h1 className="text-primary-700">Bald Jewelry</h1>
        </div>
        <div>
          <Link href="/categorias/braceletes">
            <Button
              type="button"
              className="max-w-xs px-4 py-2 text-2xl font-bold"
            >
              Conheça nossa linha de Braceletes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
