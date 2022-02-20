import { useForm } from 'react-hook-form'
import { Wizard } from 'react-use-wizard'
import FirstStepUpdate from './Steps/FirstStepUpdate'
import FinalStepUpdate from './Steps/FinalStepUpdate'
import YourDeliverable from './Steps/YourDeliverable'
import ReceiveQuote from './Steps/ReceiveQuote'
import FundEscrow from './Steps/FundEscrow'
import { useState, useEffect } from 'react'
import { supabase } from '../../../supabaseClient'
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


  const [jobs, setJobs] = useState([]);

  useEffect(() => {
       
    (async () => {
        const { data, error } = await supabase
        .from('Job')
        .select()

        if (data) {
            setJobs([...data]);
        }
    })();

  }, [setJobs])

  console.log(jobs);
  let j = jobs.find(e => 1);

  //j = job;
  console.log(j);

  return (
    <section className="px-5 mt-3 text-darky">
      <h2 className="text-2xl font-bold mb-5">{j['title']} job <small>/{j['share_code']}</small></h2>
      <div className="mt-3 flex justify-end">[expiry date]</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Wizard startIndex={pageId}>
          <ReceiveQuote job={j} register={register} trigger={trigger} />
          <FundEscrow job={j} register={register} trigger={trigger} />
          <FirstStepUpdate job={j} register={register} trigger={trigger} />
          <FinalStepUpdate job={j} register={register} trigger={trigger} />
          <YourDeliverable job={j} register={register} trigger={trigger} />
        </Wizard>
      </form>
    </section>
  )
}

export default ReviewUpdate
