type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  return <button className="text-base">{text}</button>;
}

export default Button;
