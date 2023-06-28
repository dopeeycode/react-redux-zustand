import { useCurrentLesson } from '../store/slices/player'
import { UseAppSelector } from '../store'
import { Feedback } from './FeedbackWidget'

export default function Header() {
  const { currentLesson, currentModule } = useCurrentLesson()
  const isCourseLoading = UseAppSelector((state) => state.player.isLoading)

  if (isCourseLoading) {
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
