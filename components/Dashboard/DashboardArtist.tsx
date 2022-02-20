import {
  BsCheck2,
  BsFillChatFill,
  BsFillJournalBookmarkFill,
  BsFillPencilFill,
} from 'react-icons/bs'
import { BiPlusCircle } from 'react-icons/bi'
import { MdShowChart } from 'react-icons/md'
import { AiOutlineEllipsis } from 'react-icons/ai'
import MintOffer from './MintOffer'
import Image from 'next/image'
import Link from 'next/link'

import { useAppContext } from '../../context/state'
import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'

const DashboardArtist = () => {


  const sessionState = useAppContext();

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


  return (
    <section className="px-3 mt-3 text-darky">
      <MintOffer />

      <div className="flex justify-between mt-4 items-center gap-1">
        <span className="tracking-tight">Lock the $ before you start</span>{' '}
        <Link href="/new-quote">
          <a className="bg-primary rounded-sm text-white px-3 py-1 text-lg font-semibold flex gap-1 items-center">
            New Quote
            <span className="text-xl">
              <BiPlusCircle />
            </span>
          </a>
        </Link>
      </div>

      <div className="mb-2">
        <h2 className="flex items-center gap-2 font-medium text-xl mt-7">
          In progress{' '}
          <span>
            <MdShowChart />
          </span>
        </h2>
      </div>

      <div className="shadow-md px-3 py-2 bg-white">
        <div className="flex justify-between text-lg mb-2">
          <h3>NFT headshot sketch for surfie</h3>
          <button>
            <AiOutlineEllipsis className="text-xl" />
          </button>
        </div>
        <p className="tracking-tight tracking-tight text-sm">
          Make me cross between a shark and a surfboard 🤙 …
        </p>
        <div className="mt-4 flex justify-between">
          <div className="flex items-center gap-2">
            <span className="mx-1">
              <Image
                src="/images/julian.jpg"
                width={32}
                height={32}
                className="rounded-full"
              />
            </span>
            <p>
              <span className="text-xs">TUSD</span>
              <b className="font-bold">$2,500</b>
            </p>
          </div>
          <div className="flex gap-2 text-lg">
            <Link href="/update-job/draft">
              <button className="border border-gray-300 shadow-sm py-2 px-2 rounded-sm">
                  <BsFillPencilFill className="" />
              </button>
            </Link>
            <button className="border border-gray-300 shadow-sm py-2 px-2 rounded-sm">
              <BsFillChatFill className="" />
            </button>
            <Link href="/update-job/final">
              <button className="border border-gray-300 shadow-sm py-2 px-2 rounded-sm">
                <BsCheck2 className="" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <h2 className="flex items-center gap-2 font-medium text-xl mt-7">
          Completed
          <span>
            <BsCheck2 />
          </span>
        </h2>

        <p className="tracking-tight text-slate-400 text-sm">Finished job appear here</p>
      </div>

      <div className="mb-2">
        <h2 className="flex items-center gap-2 font-medium text-xl mt-7">
          Quotes
          <span>
            <BsFillJournalBookmarkFill />
          </span>
        </h2>
        <p className="tracking-tight text-slate-400 text-sm">Jobs waiting for approval</p>

        {jobs.map(j => (
              <div className="shadow-md px-3 py-2 bg-white mt-2" key={j.id}>
                <div className="flex justify-between text-lg mb-2">
                  <h3>{j.title} </h3>
                  <button>
                    <AiOutlineEllipsis className="text-xl" />
                  </button>
                </div>
                <p className="tracking-tight text-sm">
                  {j.description}
                </p>
                <div className="mt-4 flex justify-between">
                  <div className="flex items-center gap-2">
                    <p>
                      <span className="text-xs">TUSD</span>
                      <b className="font-bold">$2,500</b>
                    </p>
                  </div>
                  <div className="flex gap-2 text-lg">
                    <Link href="/update-job/draft">
                      <button >
                          <BsFillPencilFill className="" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
        ))}

      </div>
    </section>
  )
}

export default DashboardArtist
