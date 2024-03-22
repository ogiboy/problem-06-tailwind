// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin

const ButtonVariants = () => {
  return (
    <span className="wrapper border-2 rounded-lg w-2/5 lg:w-1/5 mx-auto my-10 flex justify-between flex-wrap">
      <button className="button-create bg-green-500 hover:bg-green-800 text-white w-20 h-14 my-4 mx-2 rounded-lg">
        Create
      </button>
      <button className="button-update bg-orange-500 hover:bg-orange-800 text-white w-20 h-14 my-4 mx-2 rounded-lg">
        Update
      </button>
      <button className="button-delete bg-red-500 hover:bg-red-800 text-white w-20 h-14 my-4 mx-2 rounded-lg">
        Delete
      </button>
      <button className="bg-blue-400 hover:bg-blue-600 text-white w-full h-10 my-2 mx-2 rounded-lg">
        Testing Tailwind
      </button>
    </span>
  )
}
export default ButtonVariants
