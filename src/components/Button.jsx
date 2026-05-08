function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-semibold cursor-pointer">
        {title}
      </button>
  );
}
export default Button;
