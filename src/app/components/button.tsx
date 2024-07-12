interface IButtonProps {
  children: React.ReactNode;
  onClick(): void;
}

export function Button({ children, onClick }: IButtonProps) {
  return (
    <button
      className="flex h-12 w-60 cursor-pointer items-center justify-center rounded-3xl border border-transparent px-4 py-2 font-bold text-white transition-all hover:border-dark-200 hover:font-black focus:border-dark-200 focus:font-black"
      style={{
        background: 'linear-gradient(110.46deg, #70C3FF 12.27%, #4B65FF 93.92%)',
      }}
      onClick={onClick}>
      {children}
    </button>
  );
}
