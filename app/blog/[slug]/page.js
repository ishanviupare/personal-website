import { getPostContent, getListOfPosts } from "@/helpers/postHelpers"
import BlogPage from "@/components/BlogPage"

export const generateStaticParams = async () => {
  const posts = getListOfPosts()
  return posts.map(post => ({ slug: post.slug }))
}


async function Post({ params }) {
  
  const resolvedParams = await params
  //console.log(resolvedParams)
  const {content,data} = getPostContent(resolvedParams.slug)
  
  return (
    <div>
        <BlogPage content={content} data={data}/>
    </div>
  )
}


export default Post