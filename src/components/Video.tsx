import ReactPlayer from 'react-player'
import { UseAppSelector } from '../store'
import { useDispatch } from 'react-redux'
import { next } from '../store/slices/player'

interface VideoProps {
  videoID: string
}

export default function VideoPlayer() {
  const dispatch = useDispatch()

  const lesson = UseAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return currentLesson
  })

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
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  )
}
