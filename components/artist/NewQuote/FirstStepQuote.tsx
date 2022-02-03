import { HiOutlineSelector } from 'react-icons/hi'
import NewQuoteButtonSteps from './NewQuoteButtonSteps'
import { StepProps } from './NewQuoteTypes'
import QuoteSteps from './QuoteSteps'

const FirstStepQuote = ({ register, trigger }: StepProps) => {
  return (
    <div>
      <QuoteSteps />

      <h3 className="text-xl font-medium mb-5">What are you making?</h3>

      <label className="flex flex-col mb-5">
        <span className="font-medium mb-2">Project Title</span>
        <input
          {...register('projectName', { required: true })}
          type="text"
          className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm"
        />
      </label>

      <label className="flex flex-col mb-5">
        <span className="font-medium mb-2">Type</span>
        <div className="relative w-full">
          <select
            {...register('projectType', { required: true })}
            className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm bg-white w-full"
          >
            <option value="one">Custom Artwork</option>
            <option value="two">Another option</option>
            <option value="three">Yeah, another option</option>
          </select>
          <HiOutlineSelector className="absolute right-2 bottom-2 text-2xl" />
        </div>
      </label>

      <label className="flex flex-col mb-5">
        <span className="font-medium mb-2">Description</span>
        <textarea
          {...register('projectDescription', { required: true })}
          rows={3}
          className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm"
        ></textarea>
      </label>

      <NewQuoteButtonSteps trigger={trigger} />
    </div>
  )
}

export default FirstStepQuote
