interface CategoryButtonProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export function CategoryButton({ name, isActive, onClick }: CategoryButtonProps) {
  return (
    <div>
      <button
        className={`px-4 py-1 rounded-full border border-secondary ${
          isActive ? "bg-secondary text-white" : "bg-white text-gray-700 hover:bg-gray-300"
        }`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}
