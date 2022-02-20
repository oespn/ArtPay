import Image from 'next/image'
import { HiOutlineSelector } from 'react-icons/hi'
import { GoCheck } from 'react-icons/go'
import { legalData } from '../legal-data'
import NewQuoteButtonSteps from '../NewQuoteButtonSteps'
import { StepProps } from '../NewQuoteTypes'
import QuoteSteps from '../NewQuoteNumberSteps'
import { useState } from 'react'
import { StyledSwitch, StyledThumb } from './SecondStepQuoteStyles'
import Link from 'next/link'

// Exports
const Switch = StyledSwitch
const SwitchThumb = StyledThumb

const SecondStepQuote = ({ register, trigger, watch }: StepProps) => {
  const watchLegal = watch('legalAssignment')
  const [isDerivateWork, setIsDerivateWork] = useState(false)

  const handleSwitch = (value) => {
    setIsDerivateWork(value)
  }

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
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <HiOutlineSelector className="absolute right-2 bottom-2 text-2xl" />
        </div>
      </label>

      {legalData.map((item) => (
        <div
          className={(item.id == watchLegal ? 'block' : 'hidden') + ' mb-10'}
          key={item.id}
        >
          <p className="font-bold">{item.attribution}</p>

          {item.image && (
            <div className="mt-2">
              <Image
                src={item.image}
                width={106}
                height={40}
                alt="License image"
                className="object-cover rounded-md border border-black"
              />
            </div>
          )}

          <div className="mt-2">
            {item.conditions.map((condition) => (
              <p
                key={condition.key}
                className="flex items-center gap-1 mb-3 leading-5"
              >
                <span>
                  <GoCheck className="text-green-600 text-xl" />
                </span>
                <span className="font-semibold mr-1">{condition.key}:</span>
                {condition.value}
              </p>
            ))}
          </div>

          <p className="mt-2 text-sm text-gray-500">{item.bottomCopy}</p>
        </div>
      ))}

      <div className="mb-5 flex justify-between">
        <p>Composite or derivative work? </p>
        <div>
          <Switch
            defaultChecked
            id="s1"
            onCheckedChange={handleSwitch}
            checked={isDerivateWork}
          >
            <SwitchThumb />
          </Switch>
        </div>
      </div>

      {isDerivateWork && (
        <div className="overflow-hidden mb-7">
          <div className="flex gap-2">
            <input
              {...register('attrParty', { required: true })}
              className="w-7/12 shadow-sm shadow-gray-300 border-gray-100 px-4 py-1 rounded-sm bg-white"
              placeholder="Attribute party #1"
            />
            <label className="flex items-center w-5/12 gap-2" htmlFor="royalty">
              <span className="whitespace-pre">% royalty</span>
              <input
                {...register('royalty', { required: true })}
                className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-1 rounded-sm bg-white"
                type="text"
                placeholder="none"
              />
            </label>
          </div>
          <div className="w-full mt-2">
            <input
              {...register('attPartyAddress', { required: true })}
              type="text"
              className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-1 rounded-sm bg-white w-full"
              placeholder="Attribute party #1 wallet address"
            />
          </div>

          <div className="gap-2 m-2"> 
              <span className="text-sm underline">Add Party</span>
          </div>
        </div>
        
      )}

      <NewQuoteButtonSteps trigger={trigger} />
    </div>
  )
}

export default SecondStepQuote
