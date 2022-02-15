import { useForm } from 'react-hook-form'
import { Wizard } from 'react-use-wizard'
import FirstStepUpdate from './Steps/FirstStepUpdate'
//import SecondStepUpdate from './Steps/SecondStepUpdate'
//import ThirdStepUpdate from './Steps/ThirdStepUpdate'

const ReviewUpdate = () => {
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
  const onSubmit = (data) => console.log(data)

  return (
    <section className="px-5 mt-3 text-darky">
      <h2 className="text-2xl font-bold mb-5">[Job Name]</h2>
      <div className="mt-3 flex justify-end">
        [expiry date]
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Wizard>
          <FirstStepUpdate register={register} trigger={trigger} />
          {/* 
       <SecondStepUpdate
            register={register}
            trigger={trigger}
            watch={watch}
          />
          <ThirdStepUpdate register={register} trigger={trigger} />
          */}
        </Wizard>
      </form>
    </section>
  )
}

export default ReviewUpdate
