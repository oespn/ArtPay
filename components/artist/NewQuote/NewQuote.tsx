import { useForm } from 'react-hook-form'
import { Wizard } from 'react-use-wizard'
import FirstStepQuote from './FirstStepQuote'
import FourStepQuote from './FourStep'
import SecondStepQuote from './SecondStepQuote'
import ThirdStepQuote from './ThirdStepQuote'

const NewQuote = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <section className="px-5 mt-3 text-darky">
      <h2 className="text-2xl font-bold mb-5">New Quote</h2>

      <div className="flex justify-between mb-7 relative">
        <div className="absolute w-full h-px bg-gray-400 top-5" />
        <button className="rounded-full bg-primary text-white text-sm w-9 h-9 font-medium relative">
          1
        </button>
        <button className="rounded-full bg-primary text-white text-sm w-9 h-9 font-medium relative">
          2
        </button>
        <button className="rounded-full bg-primary text-white text-sm w-9 h-9 font-medium relative">
          3
        </button>
        <button className="rounded-full bg-primary text-white text-sm w-9 h-9 font-medium relative">
          4
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Wizard>
          <FirstStepQuote />
          <SecondStepQuote />
          <ThirdStepQuote />
          <FourStepQuote />
        </Wizard>
      </form>
    </section>
  )
}

export default NewQuote
