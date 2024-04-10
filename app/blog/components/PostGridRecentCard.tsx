import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface PostGridRecentCard {
  postTitle: string;
  postDate: string;
  postImage: string;
  authorImage: StaticImageData;
  postAuthorName: string;
}

export default function PostGridRecentCard({
  postTitle,
  postAuthorName,
  postDate,
  postImage,
  children,
  authorImage,
}: PropsWithChildren<PostGridRecentCard>) {
  return (
    <Link href={`/blog/${postTitle.replaceAll(" ", "-").toLowerCase()}`}>
      <figure className="flex cursor-pointer flex-col gap-y-4 rounded p-3 duration-150 active:bg-slate-700">
        <Image
          className="rounded"
          src={postImage}
          alt=""
          width={500}
          height={500}
        />

        <figcaption className="flex h-52 flex-col justify-between ">
          <h3 className="line-clamp-2 overflow-ellipsis text-xl font-bold">
            {postTitle}
          </h3>
          <p className="line-clamp-4 overflow-ellipsis text-slate-400">
            {(children as String).replace(/(<([^>]+)>)/gi, "")}
          </p>
          <div className="flex flex-row items-center gap-x-3 md:text-sm">
            <Image
              src={authorImage}
              alt={postAuthorName}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="-mt-1 flex flex-row">
              <p>{postAuthorName}</p>
              <p className="font-bold">&nbsp;&bull;&nbsp;</p>
              <p>{postDate}</p>
            </div>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}
