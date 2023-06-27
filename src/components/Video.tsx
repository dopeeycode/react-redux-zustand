import ReactPlayer from 'react-player'
import { next, useCurrentLesson } from '../store/slices/player'
import { UseAppDispatch } from '../store'

export default function VideoPlayer() {
  const dispatch = UseAppDispatch()
  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }

  if (!currentLesson) {
    return null
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        onEnded={handlePlayNext}
        height="470px"
        controls
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
