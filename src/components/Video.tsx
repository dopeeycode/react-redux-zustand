import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { next, useCurrentLesson } from '../store/slices/player'

export default function VideoPlayer() {
  const dispatch = useDispatch()
  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
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
