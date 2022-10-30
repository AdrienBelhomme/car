const Button = ({ text = 'button', bgColor = 'bg-btn-blue', color = 'text-white', handleClick }) => (
  <button
    onClick={handleClick}
    type="button"
    className={`${bgColor} flex font-jakarta ${color} px-6 justify-center items-center rounded py-2 dark:text-white`}
  >
    {text}
  </button>
);

export default Button;

