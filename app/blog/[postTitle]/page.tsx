"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import Man1 from "@/public/blog/man1.jpg";

import DOMPurify from "isomorphic-dompurify";

import PostData from "@/public/blog-sample.json";
import { notFound } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  //   const searchParams = useSearchParams();
  //   console.log(searchParams.get("name"));
  // console.log(params["postTitle"].toString());
  const selectedPost = PostData.blogPosts.find(function (post) {
    if (
      encodeURIComponent(post.postTitle.replaceAll(" ", "-").toLowerCase()) ==
      params["postTitle"].toString()
    ) {
      return post;
    }
  });

  if (selectedPost)
    return (
      <main className="px-10 pt-20 md:px-28 lg:px-64">
        <section>
          <h1 className="text-3xl capitalize leading-snug">
            {selectedPost.postTitle}
          </h1>
          <figure className="my-5 flex flex-row items-center gap-x-4">
            <Image
              className="h-14 w-14 rounded-full object-cover"
              src={Man1}
              alt=""
            />
            <figcaption>
              <h3 className="font-semibold">{selectedPost.postAuthor}</h3>
              <div className="flex flex-row text-slate-400">
                <p>10 min read </p>
                <p>&nbsp;&bull;&nbsp;</p>
                <p>{selectedPost.postDate}</p>
              </div>
            </figcaption>
          </figure>
          <div className="my-4 border-t border-slate-400"></div>
        </section>
        <figure className="my-7 w-full">
          <img
            className="w-full rounded object-center"
            src={selectedPost.postImage}
            alt={selectedPost.postAuthor}
          />
        </figure>
        <article
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(selectedPost.postDesc),
          }}
        ></article>
      </main>
    );
  else notFound();
}
