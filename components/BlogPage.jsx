import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import NavBar from "@/components/navbar"

function BlogPage({ content, data }) {
  return (
    <>
    <NavBar/>
      <div className="bg-amber-50 border-2 flex flex-col h-screen justify-center items-center">
        <h1>{data.title}</h1>
      <h2>{new Date(data.date).toLocaleDateString()}</h2>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
      </div>
      
    </>
  )
}

export default BlogPage