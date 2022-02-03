import { HiOutlineSelector } from 'react-icons/hi'
import NewQuoteButtonSteps from './NewQuoteButtonSteps'
import { StepProps } from './NewQuoteTypes'
import QuoteSteps from './QuoteSteps'

const SecondStepQuote = ({ register, trigger }: StepProps) => {
  return (
    <div>
      <QuoteSteps />

      <h3 className="text-xl font-medium mb-5">Who owns the rights?</h3>

      <label className="flex flex-col mb-5">
        <span className="font-medium mb-2">Legal assignment</span>
        <div className="relative w-full">
          <select
            {...register('legalAssignment', { required: true })}
            className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm bg-white w-full"
          >
            <option value="">Customer - no restrictions</option>
            <option value="">Another option</option>
            <option value="">Yeah, another option</option>
          </select>
          <HiOutlineSelector className="absolute right-2 bottom-2 text-2xl" />
        </div>
      </label>

      <label className="flex flex-col mb-5">
        <span className="font-medium mb-2">Description</span>
        <textarea
          rows={3}
          className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm"
        ></textarea>
      </label>

      <NewQuoteButtonSteps trigger={trigger} />
    </div>
  )
}

export default SecondStepQuote
