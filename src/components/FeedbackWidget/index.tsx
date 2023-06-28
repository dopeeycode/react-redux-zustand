import { MessageCircle } from 'lucide-react'
import { Popover } from '@headlessui/react'
import FeedbackForm from './FeedbackForm'

export function Feedback() {
  return (
    <Popover className="absolute z-10 bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <FeedbackForm />
      </Popover.Panel>

      <Popover.Button className="bg-violet-500 rounded-full group px-3 h-12 text-white flex items-center">
        <MessageCircle className="w-6 h-6" />

        <span className="max-w-0 group-hover:max-w-xs duration-500 transition-all overflow-hidden ease-linear">
          <span className="pl-2 font-medium" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}
