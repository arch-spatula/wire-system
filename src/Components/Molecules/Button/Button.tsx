type ButtonProps = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

function Button({ text, onClick, disabled }: ButtonProps) {
  return (
    <button
      className="focus: rounded-lg bg-neutral-900 px-4 py-3 text-base text-neutral-50 default:h-12 hover:bg-neutral-800 focus:bg-neutral-700 disabled:bg-neutral-400"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
