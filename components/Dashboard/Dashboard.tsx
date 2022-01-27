import {
  BsArrowRight,
  BsCheck2,
  BsFillChatFill,
  BsFillJournalBookmarkFill,
  BsFillPencilFill,
} from 'react-icons/bs'
import { BiPlusCircle } from 'react-icons/bi'
import { MdShowChart } from 'react-icons/md'
import { AiOutlineEllipsis } from 'react-icons/ai'
import Image from 'next/image'

const Dashboard = () => {
  return (
    <section className="px-5 mt-3 text-darky">
      <div className="bg-lightBlue p-3 rounded-sm text-darky">
        <h3 className="font-bold">Mint your first NFT for free! 👋 </h3>
        <p>Experience how our NFTs protect your work. </p>
        <div className="mt-3 flex justify-end">
          <button className="flex items-center gap-1 text-primary hover:text-primary/80 font-medium">
            Show me{' '}
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-4 items-center">
        <span>Lock the $ before you start</span>{' '}
        <button className="bg-primary rounded-sm text-white px-4 py-1 text-lg font-semibold flex gap-2 items-center">
          New Job{' '}
          <span className="text-xl">
            <BiPlusCircle />
          </span>
        </button>
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
        <p className="tracking-tight">
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
            <button className="border border-gray-300 shadow-sm py-2 px-2 rounded-sm">
              <BsFillPencilFill className="" />
            </button>
            <button className="border border-gray-300 shadow-sm py-2 px-2 rounded-sm">
              <BsFillChatFill className="" />
            </button>
            <button className="border border-gray-300 shadow-sm py-2 px-2 rounded-sm">
              <BsCheck2 className="" />
            </button>
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

        <p>Finished job appear here</p>
      </div>

      <div className="mb-2">
        <h2 className="flex items-center gap-2 font-medium text-xl mt-7">
          Quotes
          <span>
            <BsFillJournalBookmarkFill />
          </span>
        </h2>
        <p>Jobs waiting for approval</p>
      </div>
    </section>
  )
}

export default Dashboard
