const Button = ({ text = 'button', bgColor, color = 'text-white', handleClick }) => (
  <button
    onClick={handleClick}
    type="button"
    className={`${bgColor} flex font-jakarta ${color} px-4 justify-center items-center rounded py-2 dark:text-white`}
  >
    {text}
  </button>
);

export default Button;

