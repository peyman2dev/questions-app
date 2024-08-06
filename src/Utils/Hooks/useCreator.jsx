import { useMutation } from "@tanstack/react-query";
import React from "react";
import client from "../Api/client";

const fetcher = (data) =>
  client
    .post("/questions", data)
    .then((res) => res.data)
    .then((data) => data);

const useCreator = () => {
  return useMutation({
    mutationKey: ["questions"],
    mutationFn: fetcher,
  });
};

export default useCreator;
