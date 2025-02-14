import DisplaySocialsLinks from '@/components/layout/Footer/DisplaySocialsLinks'
import FooterTexts from '@/components/layout/Footer/FooterTexts'

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-8 md:px-24 py-4 border-t border-white border-border">
      <FooterTexts />
      <DisplaySocialsLinks />
    </footer>
  )
}
