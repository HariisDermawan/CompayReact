function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-gray-900 
        hover:bg-gray-800 
        transition-all 
        duration-200 
        px-6 sm:px-8 
        py-2.5 sm:py-3 
        rounded-xl 
        font-semibold 
        cursor-pointer
        text-white
        text-sm sm:text-base
        whitespace-nowrap
        w-full sm:w-auto
        min-w-[160px] sm:min-w-[180px]
        flex items-center justify-center
      ">
      {title}
    </button>
  );
}
export default Button;