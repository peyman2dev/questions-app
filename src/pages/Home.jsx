import React from "react";
import Header from "../Components/Header/Header";
import QuestionCard from "../Components/QuestionCard/QuestionCard";
import useQuestions from "../Utils/Hooks/useQuestions";

const Home = () => {
  const {data: questions} = useQuestions()

  
  return (
    <>
      <Header />
      <main>
        <section className="container my-[100px] grid grid-cols-2 gap-2 min-h-[500px] w-full rounded-lg">
            {questions?.map(quest => <QuestionCard key={quest.id} {...quest} />)}
        </section>
      </main>
    </>
  );
};

export default Home;
