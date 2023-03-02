import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <div className='my-5 border border-gray-100 p-4 shadow-sm'>
        <Link href={`/posts/${props.slug}`}>
          <h2 className='font-bold text-lg hover:underline'>{props.title}</h2>
        </Link>
  
        <p className='font-light text-slate-500 text-[0.7rem]'>{props.date}</p>
        <p className='font-light text-sm text-slate-700'>{props.subtitle}</p>
      </div>
    )
     
}

export default PostPreview;