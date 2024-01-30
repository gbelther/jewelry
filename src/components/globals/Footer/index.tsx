import Icons from '@/components/globals/Icons'
import Image from '@/components/globals/Image'
import Link from '@/components/globals/Link'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-6 bg-gray-200 p-4 md:grid md:grid-cols-[3fr_2fr_2fr]">
        <section className="flex flex-col items-center gap-3 text-center">
          <h5 className="text-primary-950">Sobre a loja</h5>
          <p className="text-sm text-gray-600">
            Explore a Bald Jewelry: um destino para encantar-se com joias
            exclusivas. Descubra elegância atemporal e peças que celebram
            momentos únicos com beleza e sofisticação.
          </p>
          <div className="flex gap-2">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="rounded-full border border-gray-700 p-1 text-gray-700"
            >
              <Icons.Lucide.Instagram
                size={24}
                className="fill-gray-700 text-white"
              />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="rounded-full border border-gray-700 p-1 text-gray-700"
            >
              <Icons.Lucide.Linkedin size={24} className="fill-gray-700 " />
            </Link>
          </div>
        </section>
        <hr className="border-gray-300 md:hidden" />
        <section className="flex flex-col items-center gap-1">
          <h6 className="text-primary-500">Menu</h6>
          <div className="flex flex-wrap items-center justify-center gap-3 md:flex-col">
            <Link href="/" className="text-sm">
              Início
            </Link>
            <Link href="/aneis" className="text-sm">
              Aneis
            </Link>
            <Link href="/aliancas" className="text-sm">
              Alianças
            </Link>
            <Link href="/colares" className="text-sm">
              Colares
            </Link>
            <Link href="/braceletes" className="text-sm">
              Braceletes
            </Link>
          </div>
        </section>
        <hr className="border-gray-300 md:hidden" />
        <section className="flex flex-col items-center gap-1">
          <h6 className="text-primary-500">Suporte</h6>
          <div className="flex flex-wrap items-center justify-center gap-3 md:flex-col">
            <Link href="/perguntas-frequentes" className="text-sm">
              Perguntas frequentes
            </Link>
            <Link href="/garantia-reembolso" className="text-sm">
              Garantia e reembolso
            </Link>
            <Link href="/rastreamentio" className="text-sm">
              Localizar meu pedido
            </Link>
            <Link href="/contatos" className="text-sm">
              Contatos
            </Link>
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 bg-white px-3 py-1 md:flex-row">
        <p className="text-xs font-bold">© Bald Jewelry 2022-2023</p>
        <section className="flex flex-wrap items-center justify-center gap-6">
          <Image
            src="/svgs/visa-flag.svg"
            alt="Bandeira Visa"
            width={62}
            height={19}
          />
          <Image
            src="/svgs/mastercard-flag.svg"
            alt="Bandeira MasterCard"
            width={44}
            height={26}
          />
          <Image
            src="/svgs/americanexpress-flag.svg"
            alt="Bandeira American Express"
            width={67}
            height={23}
          />
          <Image
            src="/svgs/paypal-flag.svg"
            alt="Bandeira PayPal"
            width={67}
            height={23}
          />
        </section>
      </div>
    </footer>
  )
}
