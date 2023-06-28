import { CircleIcon } from 'lucide-react'

export default function Loading() {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <CircleIcon className="w-4 h-4 animate-spin" />
    </div>
  )
}
