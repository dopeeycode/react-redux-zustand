import Header from '../components/Header'
import VideoPlayer from '../components/Video'
import Module from '../components/Module'
import { useEffect } from 'react'
import { useStore, useCurrentLesson } from '../zustand-store'

export default function Player() {
  const { course, load } = useStore()

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (currentLesson) {
      document.title = `${currentLesson.title}`
    }
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] p-4 flex-col gap-6">
        <Header />
        <main className="relative overflow-hidden flex rounded-lg pr-80 border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <VideoPlayer />
          </div>
          <aside
            className="w-80 absolute top-0 bottom-0 right-0 overflow-y-scroll border-l border-zinc-800
           bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900"
          >
            {course?.modules &&
              course?.modules.map((module, index) => (
                <Module
                  key={module.id}
                  moduleIndex={index}
                  title={module.title}
                  amountOfLessons={module.lessons.length}
                />
              ))}
          </aside>
        </main>
      </div>
    </div>
  )
}
