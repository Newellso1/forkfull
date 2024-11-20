export default function RecipeTag({ tag = "Category" }) {
  return (
    <div className="bg-black text-white p-1 px-2 rounded-xl text-sm select-none">
      <h4>{tag}</h4>
    </div>
  );
}
