import { Feedback } from './FeedbackWidget'
import { useStore, useCurrentLesson } from '../zustand-store'

export default function Header() {
  const { isLoading } = useStore()

  const { currentLesson, currentModule } = useCurrentLesson()
  if (isLoading) {
    return <h1 className="text-2xl text-zinc-400 animate-bounce">Aguarde...</h1>
  }

  return (
    <header className="flex items-center justify-between ">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
        <span className="text-sm text-zinc-400">
          Módulo {currentModule?.title}
        </span>
      </div>

      <Feedback />
    </header>
  )
}
