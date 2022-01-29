import { HiOutlineSelector } from 'react-icons/hi'
import { useForm } from 'react-hook-form'

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

      <div>
        <h3 className="text-xl font-medium mb-5">What are you making?</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="flex flex-col mb-5">
            <span className="font-medium mb-2">Project Title</span>
            <input
              type="text"
              className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm"
              {...register('projectTitle')}
            />
          </label>

          <label className="flex flex-col mb-5">
            <span className="font-medium mb-2">Type</span>
            <div className="relative w-full">
              <select
                {...register('projectType')}
                className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm bg-white w-full"
              >
                <option value="">Custom Artwork</option>
                <option value="">Another option</option>
                <option value="">Yeah, another option</option>
              </select>
              <HiOutlineSelector className="absolute right-2 bottom-2 text-2xl" />
            </div>
          </label>

          <label className="flex flex-col mb-5">
            <span className="font-medium mb-2">Description</span>
            <textarea
              rows={3}
              className="shadow-sm shadow-gray-300 border-gray-100 px-4 py-2 rounded-sm"
              {...register('projectDescription')}
            ></textarea>
          </label>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-3 border border-gray-400 rounded-sm py-1 font-medium"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
            <button className="px-3 rounded-sm py-1 bg-primary text-white font-medium">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default NewQuote
