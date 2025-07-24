import Image from "next/image";
import { Roboto } from "next/font/google";
import MealsSearchInput from "./components/MealsSearchInput";
export const metadata = {
  title: "All Meals ",
  description: "Trying to load meals data",
};

const roboto = Roboto({
  weight:["400"],
  // subsets:"italic"
})
const MealsPage =async ({searchParams}) => {
    const query = await searchParams;
        
  const fetchingData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      return data?.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  const meals = await fetchingData();

  return (
    <div>
      <div className="flex justify-center py-4">
        <MealsSearchInput />
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals?.map((singleMeal) => (
          <div className="border p-6 rounded-md" key={singleMeal.idMeal}>
            <Image width={641} height={641} src={singleMeal?.strMealThumb} alt="" />
            <h2 className="text-xl font-bold text-center">
              {singleMeal?.strMeal}
            </h2>
            <p className={roboto.className}>{singleMeal?.strInstructions}</p>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default MealsPage;
