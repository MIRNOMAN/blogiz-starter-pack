import { Blog } from "@/types"
import LatestBlogCard from "../ui/LatestBlogCard"

const LatestBlogs = ({blogs}:{blogs: Blog[]}) => {
  return (
    <div>
        <h1 className="text-4xl text-center my-4">Latest Blogs From <span className="text-accent">Blogiz</span></h1>
        <p className="text-xl text-center w-2/4 mx-auto"><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>
        <div className="grid grid-cols-2 gap-10 mx-6 mt-7">
            {blogs.slice(0,2).map(blog => <LatestBlogCard key={blog.id} blog={blog}/>)}
        </div>
        
    </div>
  )
}

export default LatestBlogs