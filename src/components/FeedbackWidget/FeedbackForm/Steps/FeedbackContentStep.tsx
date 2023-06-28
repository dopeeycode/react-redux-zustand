import { ArrowLeft } from 'lucide-react'
import { FeedbackType } from '..'
import { feedbackTypes } from '../../../../utils/feedbackType'
import { CloseButton } from '../CloseButton'
import ScreenshotButton from '../ScreenshotButton'
import { FormEvent, useState } from 'react'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackSent: () => void
  onFeedbackRestartRequested: () => void
}

export default function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [comment, setComment] = useState('')
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()

    onFeedbackSent()
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft onClick={onFeedbackRestartRequested} className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2 ">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="mt-4 my-2 w-full">
        <textarea
          onChange={(e) => setComment(e.target.value)}
          className="min-w-[304px] max-sm:min-w-[250px] w-full min-h-[112px] text-sm placeholder-zinc-400 
          text-zinc-100 border-[#52525B] bg-transparent rounded-md border py-2 px-3 focus:border-violet-500
        focus:ring-violet-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700
          scrollbar-track-transparent scrollbar-thin"
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex gap-2 w-full">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            disabled={!comment}
            onClick={onFeedbackSent}
            type="submit"
            className="p-2 bg-violet-500 rounded-md border-transparent flex-1 flex justify-center 
            items-centertext-sm hover:bg-[#996DFF] transition-colors focus:ring-2 focus:ring-offset-2 
          focus:ring-offset-zinc-900 focus:ring-violet-500 disabled:opacity-60 disabled:hover:bg-violet-500
            "
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
