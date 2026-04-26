---
title: Personal Website
subtitle: Learning WebDev
start: 2026-02-05T00:00:00-06:00
end: 2026-04-26T00:00:00-06:00
image: "nav.png"
---

During my second semester at UIC, I joined the Women in Computer Science Web Development Team. For that semester, the focus was curating our own personal websites. Each weekly meeting would focus on a new concept, and you could choose how to apply it to your own website. As a freshman, this was the perfect introduction to tackling my first personal project.

Throughout this documentation, I may overexplain certain concepts. This is for my own benefit, as nearly everything accomplished for the creation of this website was something new I learned, and explaining it contributes further to my own understanding.

# Design
Before we began programming, we designed our websites using Figma. I wasn't too sure what I would be able to achieve, so I created a simple design:
![Figma Design](/figma.png)

I was inspired by this art book in particular:
![Monet by Christoph Heinrich](/monet.png)

I also used my favorite color palette from "Welcome to Bloxburg."

# Setup
We began with a setup using Next.js and React. We utilized App Routing to 
![App Routing File Structure](/routing.png)

# Home Page and Navigation
When designing the home page, I decided that I wanted it to feel like the cover page of a book.

## Navbar Component
I created a `navbar.jsx` file and defined a `NavBar` component:
```js
export default function Navbar() {}
```
I then proceeded to position it within `layout.tsx`:
```js
<html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}>
  
    <main>
      {children}
    </main>

    <Navbar />

  </body>
</html>
```
Due to having a sidebar, I needed to ensure pages didn't render under the sidebar. So, I cut out 1/4 of the screen:
```js
<main classname = "w-3/4">
  {children}
</main>
```
Then, I styled my `NavBar`:
```js
<div className={`bg-[#313628] text-[#A5AE9E] fixed top-0 right-0 h-screen w-1/4 flex flex-col p-20 gap-15 text-5xl font-serif`}>
```
![Home Page with NavBar](/navbar.png)

Beautiful! However, I wanted my home page to be a different color than the rest of the website pages. That would include checking if the current path was the homepage or not.

## Conditional Rendering
In order to change the color of my pages and `NavBar`, I needed to be able to access the current path:
```js
import { usePathname } from 'next/navigation'
```
I defined constant variables to hold a boolean value for whether the current page was the home page:
```js
const pathname = usePathname()
const isHome = pathname === '/'
```
And I used [conditional rendering](https://react.dev/learn/conditional-rendering) to change the color of my pages based on my pathname:
```js
const bgColor = isHome ? 'bg-[#313628] text-[#A5AE9E]' : 'bg-[#5a4a46] text-[#c6b0ad]'
  return (
    <div className={`fixed top-0 right-0 h-screen w-1/4 flex flex-col p-20 gap-15 text-5xl font-serif ${bgColor}`}>
  )
```
![XL Size Layout](/xlscreen.png)
Yay!

## Hover Animations
I also wanted to implement hover animations for my `NavBar`. This would involve using the [`hover`](https://tailwindcss.com/docs/hover-focus-and-other-states) pseudo-class and the [`transition`](https://tailwindcss.com/docs/transition-property) utility class.
```jsx
<Link href="/" className="group flex items-center gap-2 transform-gpu transition-all duration-300 hover:scale-105 hover:text-[#ddd6cd]">
  Home
  <span className="w-6 text-center opacity-0 group-hover:opacity-100 transition duration-300">
    𓆝
  </span>
</Link>
```
This implementation features a smooth transition between each page link, as well as an appearing fish on hover events:
![Fish Appears on Hover](/fish.png)

# About Page
This page shares a photo of me and a short description of myself.
## Responsive Design
I used [`flex`](https://tailwindcss.com/docs/flex-direction) and Tailwind [breakpoints](https://tailwindcss.com/docs/responsive-design) to implement responsiveness for my About page:
```js
<div className="h-auto xl:h-screen overflow-auto xl:overflow-hidden">
  <div className = "h-full bg-[#c6b0ad] text-[#5a4a46] font-serif p-20 flex flex-col">
    <h1 className = "text-6xl mb-16"> About... </h1>
    <div className = "min-h-0 mx-auto max-w-9/10 max-h-full flex flex-col xl:flex-row gap-12">

      <div className = "xl:w-2/5 flex flexcol sm:justify-center items-center">
        <div className = "w-full h-[300px] xl:h-auto overflow-hidden rounded-xl shadow-xl">
          <img src = "profile.webp" className = "object-cover object-center w-full min-w-50 h-full min-h-130"/>
```
So that my page could do this:
![XL Size Layout](/xlscreen.png)
![MD Size Layout](/mdscreen.png)
![SM Size Layout](/smscreen.png)

## Custom Scrollbar
I wanted my text container to retain its size and scroll on [overflow](https://tailwindcss.com/docs/overflow), so I used `overflow-y-auto`. However, this resulted in a boxy scrollbar that didn't quite match my theme. To fix this, I decided to implement a [custom scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar) style:
```css
.scrollbar-custom {
  scrollbar-gutter: stable;
}

/* hide scrollbar by default */
.scrollbar-custom::-webkit-scrollbar {
  width: 0px;
}

/* show when hovering the container */
.scrollbar-custom:hover::-webkit-scrollbar {
  width: 4px;
}

/* style it */
.scrollbar-custom::-webkit-scrollbar-thumb {
  background-color: rgba(198, 176, 173, 0.7);
  border-radius: 10px;
}
```
And then I added it to my container:
```js
<div className = "h-full overflow-y-auto pr-10 -mr-2 scrollbar-custom space-y-6">
```
Now the scroll bar doesn't have an out of place track, and it only appears when hovering over the container:
![Custom Scroll Bar](/scroll.png)

# Projects Page
Initially, my projects section was going to be a simple scrolldown with a list of projects and explanations. However, after learning a little about how to structure a blog using markdown (`.md`) files during a WebDev meeting, I decided to go down that route.

## Markdown Files
I created a `posts` directory in the root to hold all my markdown files. Each markdown file begins with the following structure:
```js
---
title: Personal Website
subtitle: Learning WebDev
start: 2026-02-05T00:00:00-06:00
end: 2026-04-26T00:00:00-06:00
image: "nav.png"
---
```
The YAML frontmatter delimiters (`---`) at the top of the file constrain a block of metadata to be parsed called [frontmatter](https://dev.to/dailydevtips1/what-exactly-is-frontmatter-123g).
Here, we define our frontmatter fields. In my case, I defined `title`, `subtitle`, `start`, `end`, and `image`.

To note, `2026-02-05T00:00:00-06:00` is a YAML-formatted date and time represented in ISO 8601, with a generalized format of `YYYY-MM-DDThh:mm:ssZ`, with `Z` indicating the time is in UTC. `YYYY-MM-DDThh:mm:ss±hh:mm` can be used to indicate a specific timezone, where `±hh:mm` is the offset from UTC.

After the frontmatter, the rest of the `.md` file is just the Markdown content, and uses basic Markdown syntax.
Each `.md` file is used to hold metadata and text that will be rendered as an individual blog page later.

## Blog Components


## Dynamic Routing
Since the pages are generated from Markdown files rather than explicitly defined routes, we use dynamic routing to catch URL segments as [slugs](https://developer.mozilla.org/en-US/docs/Glossary/Slug).

In `app`, I created a directory `blog`. Within it, I created the directory `[slug]`, a [dynamic segment](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes) that catches the matching URL segment and passes it as a parameter with a usable slug. `page.js` is within `[slug]`, and it holds the logic for rendering each individual `BlogPage` after receiving the slug property.

To build `page.js`'s logic, we use two helper functions:

We use `fs` for file reading, `path` for path building, and `gray-matter` for parsing frontmatter:
```js
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
```
`getListOfPosts` returns an array of objects, one object for each `.md` file in `posts`. Each object contains properties parsed from the frontmatter using `gray-matter`, as well as a slug property coming from the name of the `.md` file:
```js
export const getListOfPosts = () => {
  const folder = path.join(process.cwd(), 'posts')
  const files = fs.readdirSync(folder)
  const mdFiles = files.filter(file => file.endsWith('.md'))

  return mdFiles.map(filename => {
    const contents = fs.readFileSync(path.join(folder, filename), 'utf8')
    const { data } = matter(contents)

    return {
      ...data,
      slug: filename.replace('.md', '')
    } 
  })
}
```
`getPostContent` takes a singular slug and reads the matching `.md` file to return a singular object with `data` and `content` properties. `data` contains properties parsed from the frontmatter, while `content` contains the Markdown content. Now, we can access specific properties with `{data.keyName}`, and we can display the Markdown content of the `.md` file with `{content}`:
```js
export const getPostContent = (slug) => {
  const file = path.join(process.cwd(), 'posts', slug) + '.md'
  const content = fs.readFileSync(file, 'utf8')
  return matter(content)
}
```

We can now use our helper functions for `page.js`:

We make sure to import our helper functions, as well as the `BlogPage` component:
```js
import { getPostContent, getListOfPosts } from "@/helpers/postHelpers"
import BlogPage from "@/components/BlogPage"
```
`generateStaticParams` is a Next.js function that returns each available slug in `posts` so each `BlogPage` can be pre-built at build time:
```js
export const generateStaticParams = async () => {
  const posts = getListOfPosts()
  return posts.map(post => ({ slug: post.slug }))
}
```
`Post` takes in the current slug and renders a `BlogPage` with the Markdown content and metadata from the `.md` file of the same name:
```js
async function Post({ params }) {
  
  const resolvedParams = await params
  const {content,data} = getPostContent(resolvedParams.slug)
  
  return (
    <div>
        <BlogPage content={content} data={data}/>
    </div>
  )
}
```
We're done! Now we just need some additional tweaks.

## Formatting Markdown Content
After rendering, I realized I needed to format my Markdown files for my page. To simplify this, I decided to use the **tailwindcss-typography** plugin. I also could've just written my own styles to use in `globals.css`.

With Tailwind v4, I could add plugins without the need of a `tailwind.config.js` file by just writing directly into `globals.css`:
```js
@plugin "@tailwindcss/typography";
```

Using the `prose` utility class, I specified formatting for Markdown syntax in `BlogPage.jsx`:
```js
<article className = {`
  prose 
  max-w-4xl mx-auto
  font-serif text-[#5a4a46] 
  prose-p:leading-8
  prose-headings:text-[#5a4a46] prose-headings:mb-2
  prose-strong:text-[#5a4a46] prose-a:text-[#5a4a46]`}>
```

I also wanted themed code blocks, so I added `rehype-highlight`, which uses the `Highlight.js` library to add themes to Markdown code blocks.

I imported my theme of choice in `globals.css`:
```js
@import "highlight.js/styles/atom-one-dark.css";
```
And added `rehype-highlight` to `BlogPage`:
```js
import rehypeHighlight from "rehype-highlight"
```
```js
<ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
  {content}
</ReactMarkdown>
```

## Reading HTML in Markdown Files
I wanted to see if I could embed existing websites within a page, and learned that it was possible with `<iframe>`s. However, I quickly learned that `ReactMarkdown` didn't support rendering HTML within `.md` files. So, I used `rehype-raw` in `BlogPage.jsx` to allow HTML to render:
```js
import rehypeRaw from 'rehype-raw'
```
```js
<ReactMarkdown rehypePlugins={[rehypeRaw]}>
  {content}
</ReactMarkdown>
```
This worked, but then I found that scroll events within the embedded website also triggered in the page, causing the page to scroll before the embed. My solution was to overwrite `<iframe>` with a component that would stop the parent from scrolling when using the embed.

`ResponsiveIFrame` creates an `<iframe>` that hides overflow when focused on it, locking away parent scroll behavior:
```js
export default function ResponsiveIFrame({ className = "", ...props }){
    return (
        <div
            className="not-prose"
            onPointerEnter={() => {
                document.body.style.overflow = 'hidden'
            }}
            onPointerLeave={() => {
                document.body.style.overflow = ''
            }}
        >
        <iframe {...props} className = {`${className}`}> </iframe>
        </div>
    )
}
```
This fixed the website issue. However, when embedding videos on a separate page, I realized that hovering over videos would cause the same scroll disabling behavior, as I overwrote `<iframe>` entirely for my Markdown files. This would disable scrolling in unsatisfying and unintended ways for my page. To fix this, I added a "YouTube" condition to `ResponsiveIFrame`:
```js
const src = props.src || ""
if (src.includes("youtube") || src.includes("youtu.be")) {
  return (
    <iframe {...props} className={`not-prose mx-auto aspect-[3/2] max-h-100 ${className}`}></iframe>
  )
}
```
This would also make it so I wouldn't have to re-style every YouTube embed.

## Time Surpassed Metadata
In addition to the original date started, I wanted to display how much time I had worked on something. I implemented this by adding `start` and `end` frontmatter fields to my markdown files. `start` would be parsed and then created into a `Date` object to display as the starting date, but I needed a helper function to display the time surpassed between `start` and `end`.

I wrote the function `formatTime` for this, which calculates and converts the `start` and `end` properties into year, month format. It also accounts for non-plural cases, as well as short and ongoing projects:
```js
export function formatTime({ start, end }) {
  const startDate = new Date(start)
  const endDate = end ? new Date(end) : new Date()

  let years = endDate.getFullYear() - startDate.getFullYear()
  let months = endDate.getMonth() - startDate.getMonth()

  //conversion
  if (months < 0) {
    years--
    months += 12
  }

  //build string parts
  const parts = []

  //plural cases
  if (years > 0) {
    parts.push(`${years}yr${years > 1 ? "s" : ""}`)
  }

  if (months > 0) {
    parts.push(`${months}mo${months > 1 ? "s" : ""}`)
  }

  //if short project
  if (parts.length === 0) {
    parts.push("less than 1mo")
  }

  let result = `For ${parts.join(" ")}`

  //if ongoing
  if (!end) {
    result += " (ongoing)"
  }

  return result
}
```
Possible outputs include `"For 4yrs 1mo"`, `"For 1 yr 2mos (ongoing)"`, and `"For less than 1mo"`.

# Contact Page
This page acts as a way to access my contact information.

## Hyperlinks and Redirection
