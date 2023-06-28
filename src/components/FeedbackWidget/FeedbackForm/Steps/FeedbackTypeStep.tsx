import { FeedbackType } from '..'
import { feedbackTypes } from '../../../../utils/feedbackType'
import { CloseButton } from '../CloseButton'

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export default function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, item]) => {
          return (
            <button
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              key={item.id}
              className="bg-zinc-800 rounded-lg py-3 w-[5.5rem] flex flex-col gap-2 flex-1 items-center border-2 
            border-transparent hover:border-violet-500 focus:outline-none focus:border-violet-500"
              type="button"
            >
              <img src={item.image.source} alt={item.image.alt} />
              <span className="text-sm">{item.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
