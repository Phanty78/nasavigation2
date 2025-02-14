import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex justify-center items-center gap-6">
      <Image
        src="/images/nasa-logo.png"
        alt="Nasa logo"
        width={60}
        height={60}
        priority
      />
      <h1 className="text-4xl font-bold font-nasa">Nasavigation</h1>
    </div>
  )
}
