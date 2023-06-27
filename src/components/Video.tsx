import ReactPlayer from 'react-player'
import { next, useCurrentLesson } from '../store/slices/player'
import { UseAppDispatch, UseAppSelector } from '../store'
import { Loader } from 'lucide-react'

export default function VideoPlayer() {
  const dispatch = UseAppDispatch()
  const { currentLesson } = useCurrentLesson()
  const isCourseLoading = UseAppSelector((state) => state.player.isLoading)

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isCourseLoading ? (
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
