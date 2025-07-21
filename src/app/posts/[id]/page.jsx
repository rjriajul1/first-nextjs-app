export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const DetailsPage =async({params}) => {
    const {id} = await params;
    const data = await getPosts()
    const singlePost = await data?.find(post=> post.id == id)


    return (
        <div className=" text-center border p-6 w-1/2 mx-auto rounded-2xl">
            {singlePost.title}
        </div>
    );
};

export default DetailsPage;