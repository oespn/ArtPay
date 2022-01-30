import { useForm } from 'react-hook-form'
import { Wizard } from 'react-use-wizard'
import FirstStepQuote from './FirstStepQuote'
import FourStepQuote from './FourStep'
import QuoteSteps from './QuoteSteps'
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <Wizard>
          <FirstStepQuote register={register} />
          <SecondStepQuote register={register} />
          <ThirdStepQuote register={register} />
          <FourStepQuote register={register} />
        </Wizard>
      </form>
    </section>
  )
}

export default NewQuote
