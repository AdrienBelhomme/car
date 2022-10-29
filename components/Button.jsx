const Button = ({ text = 'button', bgColor = 'bg-btn-blue', color = 'text-white', handleClick }) => (
  <button
    onClick={handleClick}
    type="button"
    className={`${bgColor} flex font-semibold font-jakarta ${color} px-6 justify-center items-center rounded py-3 dark:text-white`}
  >
    {text}
  </button>
);

export default Button;

