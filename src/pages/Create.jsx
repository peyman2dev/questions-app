import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Editor from "../Components/Editor/Editor";
import useCreator from "../Utils/Hooks/useCreator";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { mutate: createQuestion } = useCreator();
  const [questionBody, setQuestionBody] = useState(null);
  const [answerBody, setAnswerBody] = useState(null);
  const [question, setQuestion] = useState({
    id: crypto.randomUUID(),
    fa_title: null,
    en_title: null,

    author: {
      username: "@peyman2dev",
      fullName: "پیمان احمدی",
    },
  });

  const submitted = () => {
    createQuestion(
      {
        ...question,
        question: questionBody,
        answer: answerBody,
      },
      {
        onSuccess: () => {
          toast.success("با موفقیت ایجاد گردید", {
            autoClose: 2500,
            onClose: () => {
              navigate("/");
            },
          });
        },
      }
    );
  };
  return (
    <>
      <ToastContainer bodyClassName={"font-Dana-Regular"} />
      <Header />
      <main className="my-[110px] w-[50%] mx-auto child:w-full">
        <div className="space-y-2">
          <input
            type="text"
            className="w-full h-[45px] outline-none px-10 rounded-md"
            onChange={(event) =>
              setQuestion((prev) => ({
                ...prev,
                fa_title: event.target.value,
              }))
            }
            placeholder="عنوان پارسی پرسش را وارد نمائید ..."
          />
          <input
            type="text"
            onChange={(event) =>
              setQuestion((prev) => ({
                ...prev,
                en_title: event.target.value,
              }))
            }
            className="w-full h-[45px] outline-none px-10 rounded-md"
            placeholder="Enter the english title ..."
            dir="ltr"
          />
          <Editor setValue={setQuestionBody} />
        </div>
        <div className="my-10">
          <p className="mb-4">پاسخ:</p>
          <Editor setValue={setAnswerBody} />
        </div>
      </main>
      <footer className="flex w-[50%] mx-auto items-center justify-end">
        <button
          onClick={submitted}
          className="font-Dana-Medium bg-[#1f1f1f] px-4 py-1.5 rounded-lg text-white duration-150 hover:scale-[0.99] active:scale-100"
        >
          ایجاد پرسش
        </button>
      </footer>
    </>
  );
};

export default Create;
