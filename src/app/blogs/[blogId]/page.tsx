import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";

interface BlogId{
    params:{
        blogId:string
    }
}

const BlogDetailsPage = async({params}:BlogId) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`,{
        cache: "no-store",
       });
       const blog = await res.json();
  return (
    <div className="my-7">
        <BlogDetails blog={blog}/>
    </div>
  )
}

export default BlogDetailsPage