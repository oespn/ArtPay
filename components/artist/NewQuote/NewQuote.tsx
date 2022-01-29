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
import Link from 'next/link'

const NewQuote = () => {
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

      <div>
        <h3 className="text-xl font-medium mb-5">What are you making?</h3>

        <label className="flex flex-col">
          <span className="font-medium mb-2">Project Title</span>
          <input
            type="text"
            className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm"
          />
        </label>
      </div>
    </section>
  )
}

export default NewQuote
