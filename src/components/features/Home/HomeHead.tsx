import { Button } from '@/components/ui/button'
import { GiCardRandom as RandomIcon } from 'react-icons/gi'
import { DatePicker } from './DatePicker'

export default function HomeHead() {
  return (
    <div className="flex justify-center items-center gap-12 py-8">
      <DatePicker />
      <Button>
        <RandomIcon />
      </Button>
    </div>
  )
}
