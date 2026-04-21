import BlogIndex from "@/components/BlogIndex";
import { getListOfPosts } from "@/helpers/postHelpers";
import "../globals.css";
import Link from "next/link";

export default function Home() {
  const posts = getListOfPosts();
  console.log(posts);

  return (
    <div className="mr-[25%]">
      <div className="min-h-screen p-20 bg-[#c6b0ad] font-serif text-[#5a4a46]">
          
        <h1 className = "text-6xl mb-16"> Projects... </h1>

          {/*<div className = "text-xl space-y-7 py-16">
            <p>Welcome to my projects page!</p>
            </div>*/}

        <BlogIndex posts={posts} />

      </div>
    </div>
  );
}
