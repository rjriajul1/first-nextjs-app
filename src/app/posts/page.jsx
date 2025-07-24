import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "All Post ",
  description: "Trying to learn Next JS as best as we can",
};

const Posts = async () => {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 space-y-2">
      {posts.map((singlePost) => {
        return (
          <div className="p-6" key={singlePost.id}>
            <div className="border p-6 rounded-2xl">
              <h1 className="text-xl text-center font-bold py-3 text-blue-600">
                {singlePost.title}
              </h1>
              <p>{singlePost.body}</p>
              <div className="flex justify-center py-6">
                <Link href={`posts/${singlePost.id}`}><button className="border px-4 py-1 hover:bg-amber-200 hover:text-black cursor-pointer rounded-md ">
                  Details
                </button></Link>
              </div>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default Posts;
