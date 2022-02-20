import { useForm, useFormContext } from 'react-hook-form'
import { Wizard } from 'react-use-wizard'
import FirstStepQuote from './Steps/FirstStepQuote'
import FourStepQuote from './Steps/FourStep'
import SecondStepQuote from './Steps/SecondStepQuote'
import ThirdStepQuote from './Steps/ThirdStepQuote'
import ShareStep from './Steps/ShareStep'
import { useAppContext } from '../../../context/state'

const NewQuote = () => {
  const {
    register,
    trigger,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      legalAssignment: 1,
    },
  })

  const sessionState = useAppContext();

  const onSubmit = (data) => {
    console.log(">> Data.title title should have a value:"+ data.title); // IT WORKED!
//TODO:DB: Append row in JOB table from sessionState.job
  }

  let j = sessionState.job;


  return (
    <section className="px-3 mt-3 text-darky">
      <h2 className="text-2xl font-bold mb-5">New Quote</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Wizard>
          <FirstStepQuote job={j} register={register} trigger={trigger} watch={watch} />
          <SecondStepQuote
            job={j}
            register={register}
            trigger={trigger}
            watch={watch}
          />
          <ThirdStepQuote job={j} register={register} trigger={trigger} />
          <ShareStep job={j} register={register} trigger={trigger} />
        </Wizard>
      </form>
    </section>
  )
}

export default NewQuote
