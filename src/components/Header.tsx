import { MessageCircle } from 'lucide-react'
import { UseAppSelector } from '../store'

export default function Header() {
  const { currentLesson, currentModule } = UseAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player

    const currentModule = state.player.course.modules[currentModuleIndex]
    const currentLesson = currentModule.lessons[currentLessonIndex]

    return { currentLesson, currentModule }
  })
  return (
    <header className="flex items-center justify-between ">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
        <span className="text-sm text-zinc-400">
          Módulo {currentModule.title}
        </span>
      </div>

      <button
        className="flex items-center gap-2 rounded bg-violet-500 transition-colors px-3 py-2 text-sm font-medium
          hover:bg-violet-600"
      >
        <MessageCircle className="w-4 h-4" />
        Deixar feedback
      </button>
    </header>
  )
}
