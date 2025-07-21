import MealsSearchInput from "./components/MealsSearchInput";

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
            <h2 className="text-xl font-bold text-center">
              {singleMeal?.strMeal}
            </h2>
            <p>{singleMeal?.strInstructions}</p>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default MealsPage;
