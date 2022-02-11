import { HiOutlineSelector } from 'react-icons/hi'
import { useWizard } from 'react-use-wizard'
import { StepProps } from '../NewQuoteTypes'
import QuoteSteps from '../NewQuoteNumberSteps'

const ThirdStepQuote = ({ register }: StepProps) => {
  const { handleStep, previousStep, nextStep } = useWizard()
  return (
    <div>
      <QuoteSteps />
      <h3 className="text-xl font-medium mb-5">Price & costs</h3>

      <div className="relative flex justify-end">
        <select className="w-7/12 shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm bg-white">
          <option value="">USDT</option>
          <option value="">Another option</option>
          <option value="">Yeah, another option</option>
        </select>
        <HiOutlineSelector className="absolute right-2 bottom-2 text-2xl" />
      </div>

      <label className="flex items-center justify-between mb-5 gap-2 mt-3">
        <span className="font-medium mb-2 whitespace-pre">Customer price</span>
        <div className="relative w-5/12">
          <input
            className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm bg-white w-full text-right"
            placeholder="$2.500"
          />
        </div>
      </label>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="px-3 border border-gray-400 rounded-sm py-1 font-medium"
          onClick={() => previousStep()}
        >
          Back
        </button>
        <button
          onClick={() => nextStep()}
          className="px-3 rounded-sm py-1 bg-primary text-white font-medium"
        >
          Next Step
        </button>
      </div>
    </div>
  )
}

export default ThirdStepQuote
