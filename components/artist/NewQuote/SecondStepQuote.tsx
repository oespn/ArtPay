import Image from 'next/image'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsCheck, BsCheck2 } from 'react-icons/bs'
import { HiOutlineSelector } from 'react-icons/hi'
import { GoCheck } from 'react-icons/go'
import { legalData } from './legal-data'
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
            {legalData.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
          <HiOutlineSelector className="absolute right-2 bottom-2 text-2xl" />
        </div>
      </label>

      <div className="mb-10">
        <p>Attribution-NoDerivs 4.0 Generic</p>
        <div className="mt-2">
          <Image
            src="/images/license.png"
            width={106}
            height={40}
            alt="License image"
            className="object-cover rounded-sm"
          />
        </div>

        <div>
          <p className="flex items-center gap-1">
            <span>
              <GoCheck className="text-green-600 text-xl" />
            </span>{' '}
            Semper eget duis at tellus at urna
          </p>
          <p className="flex items-center gap-1">
            <span>
              <GoCheck className="text-green-600 text-lg" />
            </span>{' '}
            Semper eget duis at tellus at urna
          </p>
          <p className="flex items-center gap-1">
            <span>
              <GoCheck className="text-green-600 text-xl" />
            </span>{' '}
            Semper eget duis at tellus at urna
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Share — copy and redistribute the material in any medium or format for
          any purpose, even commercially.
        </p>
      </div>

      <NewQuoteButtonSteps trigger={trigger} />
    </div>
  )
}

export default SecondStepQuote
