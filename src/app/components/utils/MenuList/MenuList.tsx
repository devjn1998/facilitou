interface MenuListProps {
  onCategoryChange: (category: string) => void;
}

const MenuList: React.FC<MenuListProps> = ({ onCategoryChange }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onCategoryChange("supermercado")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Supermercado
            </button>
          </li>
          <li>
            <button
              onClick={() => onCategoryChange("atacadao")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Atacadão
            </button>
          </li>
          <li>
            <button
              onClick={() => onCategoryChange("supermarket")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Supermarket
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
