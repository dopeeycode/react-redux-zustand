import ReactPlayer from 'react-player'
import { Loader } from 'lucide-react'
import { useStore, useCurrentLesson } from '../zustand-store'

export default function VideoPlayer() {
  const { isLoading, next } = useStore()
  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    next()
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-8 h-8 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          onEnded={handlePlayNext}
          height="470px"
          controls
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  )
}
