const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary-light text-white text-xl font-bold rounded-lg w-48 h-16 lg:ml-10"
    >
      {children}
    </button>
  );
};

export default Button;
