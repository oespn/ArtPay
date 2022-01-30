import { FieldValues, UseFormRegister } from 'react-hook-form'
import { HiOutlineSelector } from 'react-icons/hi'
import { useWizard } from 'react-use-wizard'
import QuoteSteps from './QuoteSteps'

const FirstStepQuote = ({
  register,
}: {
  register: UseFormRegister<FieldValues>
}) => {
  const { activeStep, previousStep, nextStep } = useWizard()
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

      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="px-3 border border-gray-400 rounded-sm py-1 font-medium"
          onClick={() => window.history.back()}
        >
          Cancel
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

export default FirstStepQuote
