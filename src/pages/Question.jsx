import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { FaCheck } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import useQuestions from "../Utils/Hooks/useQuestions";
const Question = () => {
  const { id } = useParams();
  const { data: questions, isLoading, isFetching } = useQuestions();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    if (questions?.length) {
      let targetQuest = questions.find(quest => quest.id == id)
      setQuestion(targetQuest)
    }
  }, [!isLoading, !isFetching]);

  return (
    <>
      <Header />
      <main className="my-[40px] container">
        <div className="min-h-[170px] w-full p-5 rounded-lg bg-white mb-6">
          <div className="gap-3 font-Dana-Medium text-zinc-800">
            <h1>{question?.fa_title}</h1>
            <div className="flex items-center my-2">
              <div className="w-full h-px bg-black/10"></div>
              <h3 dir="ltr" className="min-w-max px-5">
              {question?.en_title}
              </h3>
            </div>
          </div>
          <div className="line-clamp-3">
          <div dangerouslySetInnerHTML={{__html: question?.question}}></div>
          </div>
        </div>

        <div className="w-[90%] mr-auto rounded-lg shadow-lg shadow-black/10 min-h-[140px] bg-white p-5">
          <header className="items-center justify-between flex">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-14 h-14">
                <img
                  src="https://secure.gravatar.com/avatar/daf78aa30d2e0aea82e7c1a8f80c28da?s=96&d=mm&r=g"
                  alt="user profile"
                  className="w-12 h-12 rounded-full"
                />
                <div className="absolute w-full h-full rounded-full border-2 border-teal-500"></div>
                <div className="verify text-sm absolute w-5 h-5 rounded-full bg-teal-500 top-0 right-0 flex items-center justify-center text-white">
                  <FaCheck />
                </div>
              </div>
              <div>
                <p className="font-Dana-Demi text-lg">پیمان احمدی</p>
                <p className="text-xs text-zinc-500">@peyman2dev</p>
              </div>
            </div>
            <Link
              to={"/"}
              className="px-6 py-2 duration-150 hover:bg-opacity-90 rounded-2xl bg-teal-600 font-Dana-Medium text-white"
            >
              پروفایل مدرس
            </Link>
          </header>
          <main className="my-4 tracking-tight font-Dana-Light">
            <div dangerouslySetInnerHTML={{__html: question?.answer}}>
            
            </div>
          </main>
        </div>
      </main>
    </>
  );
};

export default Question;
