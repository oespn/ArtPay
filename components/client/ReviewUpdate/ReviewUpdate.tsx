import { useForm } from 'react-hook-form'
import { Wizard } from 'react-use-wizard'
import FirstStepUpdate from './Steps/FirstStepUpdate'
import FinalStepUpdate from './Steps/FinalStepUpdate'
import YourDeliverable from './Steps/YourDeliverable'
import ReceiveQuote from './Steps/ReceiveQuote'
import FundEscrow from './Steps/FundEscrow'
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
  const pageId = 0; //this.props.id passed in param


  //TODO: intercept params on: http://localhost:3000/client-update/:share_code
  //TODO: read job matching query.params.share_code from database
  const job = {
    id: 0,
    title: "Job title",
    description: "Description",
    lic_type: "C00",
    job_type: "NFT",
    expiry: 0,
    created: 0,
    created_by_userId: 0,
    share_code: "abb-gta"
  };

  //TODO: Reject show pop-up: contact the artist.

  const onSubmit = (data) => {
    console.log("Submit and open wallet: "+ job.title);
  //TODO:SMC: Append ESCROWs table
  }

  return (
    <section className="px-5 mt-3 text-darky">
      <h2 className="text-2xl font-bold mb-5">[Job Name]</h2>
      <div className="mt-3 flex justify-end">[expiry date]</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Wizard startIndex={pageId}>
          <ReceiveQuote register={register} trigger={trigger} />
          <FundEscrow register={register} trigger={trigger} />
          <FirstStepUpdate register={register} trigger={trigger} />
          <FinalStepUpdate register={register} trigger={trigger} />
          <YourDeliverable register={register} trigger={trigger} />
        </Wizard>
      </form>
    </section>
  )
}

export default ReviewUpdate
