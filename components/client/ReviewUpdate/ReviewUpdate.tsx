import { useForm } from 'react-hook-form'
import { Wizard } from 'react-use-wizard'
import FirstStepUpdate from './Steps/FirstStepUpdate'
import FinalStepUpdate from './Steps/FinalStepUpdate'
import YourDeliverable from './Steps/YourDeliverable'
import ReceiveQuote from './Steps/ReceiveQuote'
import FundEscrow from './Steps/FundEscrow'
//import SecondStepUpdate from './Steps/SecondStepUpdate'
//import ThirdStepUpdate from './Steps/ThirdStepUpdate'

import { useAppContext } from '../../../context/state'
import { initNear, loadContract } from '../../../context/utils'
import { useState, useEffect } from 'react'

const ReviewUpdate = () => {
  const sessionState = useAppContext();
  const [message, setMessage] = useState('')
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
  const pageId = 4; //this.props.id passed in param


  //TODO: intercept params on: http://localhost:3000/client-update/:share_code
  //TODO: read job matching query.params.share_code from database
  const job = {
    id: 0,
    contractor: "artpay.testnet",
    title: "Job title",
    description: "Description",
    lic_type: "C00",
    job_type: "NFT", 
    expiry: 0,
    created: 0,
    created_by_userId: 0,
    share_code: "abb-gta",

    locked_amount: 0,
    requirement: "Requirement Statements",

    license_code: "FULL",  // Store short code abbreviations eg: 'by-nc-sa'
    license_desc: "Licence description",  // Human readable
    license_url: "Statment or contract on IPFS", // link to contract (maybe HTTPS or IPFS address) 
  };

  //TODO: Reject show pop-up: contact the artist.

  const onSubmit = async (data) => {
    console.log("Submit and open wallet: "+ job.title);
    //TODO:SMC: Append ESCROWs table
    const { near, wallet } = await initNear();
    sessionState.near = near;
    sessionState.wallet = wallet;

    setMessage(`Creating Job ...`);
    const contract: any = loadContract(sessionState.near, sessionState.wallet, "escrow")
    const escrowId = await contract.create_new_escrow(
      {
        contractor: job.contractor,
        title: job.title,
        escrow_type: job.job_type,
        description: job.description,
        timestamp: job.expiry,

        requirement: job.requirement,

        license_code: job.license_code,
        license_desc: job.license_desc,
        license_url: job.license_url,
      }, sessionState.MAX_GAS, job.locked_amount 
    );
    setMessage(`Escrow created! Id: ${escrowId}`);
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

      <div>{message}</div>
    </section>
  )
}

export default ReviewUpdate
