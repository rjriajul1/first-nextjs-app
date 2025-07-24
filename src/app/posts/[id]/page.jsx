export const getPosts = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const id = params.id;
  const singlePost = await getPosts(id);

  return {
    title: singlePost?.title || "Post Details",
    description: singlePost?.body || "Details of the selected post",
  };
}

const DetailsPage = async ({ params }) => {
  const id = params.id;
  const singlePost = await getPosts(id);

  return (
    <div className="text-center border p-6 w-1/2 mx-auto rounded-2xl">
      <h1 className="text-xl font-bold mb-4">{singlePost.title}</h1>
      <p>{singlePost.body}</p>
    </div>
  );
};

export default DetailsPage;
