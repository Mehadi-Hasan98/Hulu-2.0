import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from 'next/image';

function Thumbnail({result}) {
    const BASE_URL = "https://images.tmdb.org/t/p/original/";
  return (
    <div>
       <Image
        layout='responsive'
        src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster.path}`
        }
        height={1080}
        width={1920}
        alt=""/>
       <div className='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2>
            {result.title || result.origianl_name}
        </h2>
        <p>
            {result.media_type && `${result.media_type} .`}{" "}
            {result.release_date || result.first_air_date} .{" "}
            <ThumbUpIcon className='h-5 mx-2'/> {result.vote_count}
        </p>
        </div>
    </div>
  )
}

export default Thumbnail