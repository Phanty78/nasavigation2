import { ModeToggle } from '@/components/layout/Header/mode-toggle'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 md:px-24 border-b border-border border-white py-2">
      <Logo />
      <ModeToggle />
    </header>
  )
}
