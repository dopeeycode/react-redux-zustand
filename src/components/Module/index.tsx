import * as Collapsible from '@radix-ui/react-collapsible'

import { ChevronDown } from 'lucide-react'
import Lesson from './Lesson'
import { UseAppSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { play } from '../../store/slices/player'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export default function Module({
  title,
  moduleIndex,
  amountOfLessons,
}: ModuleProps) {
  const { currentModuleIndex, currentLessonIndex } = UseAppSelector((state) => {
    const { currentModuleIndex } = state.player
    const { currentLessonIndex } = state.player

    return { currentModuleIndex, currentLessonIndex }
  })

  const lessons = UseAppSelector((state) => {
    return state.player.course.modules[moduleIndex].lessons
  })

  const dispatch = useDispatch()

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4 ">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="ml-auto w-5 h-5 text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col p-6 gap-4">
          {lessons.map((lesson, lessonIndex) => {
            const isCurrent =
              currentModuleIndex === moduleIndex &&
              currentLessonIndex === lessonIndex

            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                isCurrent={isCurrent}
              />
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
