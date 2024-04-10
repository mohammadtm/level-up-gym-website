import Image, { StaticImageData } from "next/image";
import BlogImage2 from "../../public/blog/blog2.jpg";
import Man1 from "../../public/blog/man1.jpg";
import { Metadata } from "next";
import PostGridCard from "./components/PostGridCard";
import PostGridRecentCard from "./components/PostGridRecentCard";

import PostData from "@/public/blog-sample.json";

export const metadata: Metadata = {
  title:
    "Fitness Blog | Stay Informed and Inspired with LevelUp Gym's Latest Articles",
  description:
    "Dive into LevelUp Gym's fitness blog for informative articles, workout tips, nutrition advice, and inspirational stories to keep you motivated on your fitness journey.",
  keywords:
    "fitness blog, workout tips, exercise routines, nutrition advice, fitness inspiration, health articles, wellness tips, workout motivation, fitness trends, exercise guides, healthy living, workout challenges, fitness community, wellness articles, exercise motivation",
};

export default function BlogPage() {
  return (
    <main className="px-8 pt-10">
      <section>
        <article className="flex flex-col items-center gap-y-2 py-1">
          <h1 className="text-2xl text-slate-300">Our Blog</h1>
          <h2 className="text-3xl font-semibold">Stories & Tips</h2>
          <p className="text-slate-400">
            Explore gym boys and girl stories and tips for better exercise.
          </p>
        </article>
      </section>
      <section className="flex flex-col gap-5 md:h-screen md:flex-row md:gap-x-4">
        <article className="h-full w-full">
          <h2 className="py-3 text-2xl font-semibold">Top Stories</h2>
          <div className="mt-1.5 grid h-full grid-cols-1 gap-2 sm:grid-cols-2">
            {PostData.blogPosts
              .slice(Math.max(PostData.blogPosts.length - 3, 0))
              .map((post, idx) => (
                <PostGridCard
                  key={idx}
                  cardType="Story"
                  cardIndex={idx}
                  cardTitle={post.postTitle}
                  cardImage={post.postImage}
                >
                  {post.postDesc}
                </PostGridCard>
              ))}
          </div>
        </article>
        <aside className="h-full w-full">
          <h2 className="w-full py-3 text-2xl font-semibold">Top Tips</h2>
          <article className="mt-1.5 grid h-full w-full grid-cols-1 gap-2 sm:grid-cols-2">
            {PostData.blogPosts
              .slice(Math.max(PostData.blogPosts.length - 3, 0))
              .map((post, idx) => (
                <PostGridCard
                  key={idx}
                  cardType="Topic"
                  cardIndex={idx}
                  cardTitle={post.postTitle}
                  cardImage={post.postImage}
                >
                  {post.postDesc}
                </PostGridCard>
              ))}
          </article>
        </aside>
      </section>

      <section className="my-5 md:mt-20">
        <h2 className="mb-3 mt-2 w-full text-2xl font-semibold">
          Recent Blog Post
        </h2>
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PostData.blogPosts.map((post, idx) => (
            <PostGridRecentCard
              key={idx}
              authorImage={Man1}
              postImage={post.postImage}
              postAuthorName={post.postAuthor}
              postDate={post.postDate}
              postTitle={post.postTitle}
            >
              {post.postDesc}
            </PostGridRecentCard>
          ))}
        </article>
      </section>
    </main>
  );
}

interface PostListProps {
  postNumber: number;
  postTitle: string;
  postAuthor: string;
  postDate: string;
  postImage: StaticImageData;
}
function PostList({
  postNumber,
  postTitle,
  postAuthor,
  postDate,
  postImage,
}: PostListProps) {
  return (
    <div className="flex cursor-pointer flex-row justify-between rounded py-1 active:bg-slate-800">
      <div className="mt-3 flex flex-col">
        <div className="relative flex flex-row gap-x-2">
          {postNumber != 0 && (
            <p className="absolute rounded-full bg-slate-800 px-2.5 py-0.5">
              {postNumber}
            </p>
          )}
          <h3 className="-mt-0.5 ml-9 text-xl">{postTitle}</h3>
        </div>
        <p className="ml-[2.3rem] mt-3 text-sm capitalize text-slate-400">
          {postAuthor} | {postDate}
        </p>
      </div>
      <figure className="min-w-32  max-w-32">
        <Image
          src={postImage}
          className="h-20 rounded object-cover md:h-28"
          alt=""
        />
      </figure>
    </div>
  );
}
