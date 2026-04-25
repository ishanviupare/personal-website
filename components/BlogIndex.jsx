import Link from "next/link"

function BlogIndex({ posts }) {
  console.log(posts)
  return (
    <section className="
      grid gap-12 px-10 w-full
      grid-cols-1
      sm:[grid-template-columns:repeat(auto-fit,minmax(250px,250px))]
      ">
      {
        // posts.map(post => (
        //   <article key={post}>
        //     <Link href={`blog/${post.replace('.md', '')}`}>
        //       {post}
        //     </Link>
        //   </article>
        // ))

        posts.map(post => (
        
          <Link key={post.slug} href={`blog/${post.slug}`} className=" font-bold text-xl cursor-pointer relative">
            <img src="/pin.png" className="absolute -top-3 left-1/2 -translate-x-1/2 w-11 h-11 z-20 pointer-events-none"/>
            <div className="bg-[#ddd6cd] transition-transform hover:rotate-3 shadow:sm pt-5 px-4 pb-10 mx-auto w-full max-w-[320px] shadow-lg hover:shadow-xl">
              <article>
                <img
                  src={post.image}
                  className="w-full aspect-[3/4] object-cover mb-4"
                />
                <p className = "">
                  {post.title}
                </p>

              </article>

            </div>
          </Link>

        ))

      }
    </section>
  )
}

export default BlogIndex