import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div
      className="recipe-item flex flex-col w-80 overflow-hidden p-5 shadow-xl gap-5 rounded-2xl border-2 border-white"
    >
      <div className="recipe-image h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="recipe item" className="block w-full" />
      </div>
      <div className="recipe-info">
        <span className="text-sm text-gray-500 font-medium">{item?.publisher}</span>
        <h3 className="font-bold text-2xl truncate text-black">{item?.title}</h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="recipe-details-btn text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
