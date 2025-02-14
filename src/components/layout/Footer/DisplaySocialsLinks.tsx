import SOCIALSLINKS from '@/constants/socials-links'
import Link from 'next/link'

export default function DisplaySocialsLinks() {
  return (
    <ul className="flex justify-center items-center gap-6">
      {SOCIALSLINKS.map((link) => {
        const Icon = link.Component
        return (
          <li key={link.label}>
            <Link
              aria-label={`go to ${link.label} page`}
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon size={30} className="transition hover:scale-125" />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
