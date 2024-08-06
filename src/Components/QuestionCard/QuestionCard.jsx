import React from "react";
import { Link } from "react-router-dom";

const QuestionCard = ({id, author, en_title, fa_title, question, answer}) => {
  return (
    <article className="w-full h-[170px] bg-[white] min-h-[140px] rounded-lg border border-white/10 select-none overflow-hidden duration-150 hover:shadow-md hover:shadow-black/5 hover:scale-[0.98] active:scale-[0.99] relative p-5 group  child:duration-150 cursor-pointer">
      <h2 className="text-lg font-Dana-ExtraBold group-hover:text-sky-400">
       {fa_title}
      </h2>
      <div className="flex my-3 items-center gap-2" dir="ltr">
        <span className="min-w-max px-3 font-Dana-ExtraBold text-sm text-zinc-600 group-hover:text-zinc-950">
          {en_title}
        </span>
        <div className="w-full h-px bg-black/10"></div>
      </div>
      <div className="my-4 line-clamp-2 font-Dana-Light text-black/70">
        <div dangerouslySetInnerHTML={{__html: question}}></div>
      </div>
      <Link
        draggable="false"
        to={`/question/${id}`}
        className="w-full h-full absolute top-0 right-0 select-none"
      ></Link>
    </article>
  );
};

export default QuestionCard;
