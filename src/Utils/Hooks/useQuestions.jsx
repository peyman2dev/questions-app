import { QueryClient, useQuery } from '@tanstack/react-query'
import React from 'react'
import client from '../Api/client'


const fetcher = () => client.get('/questions').then(res => res.data).then(data => data)

const useQuestions = () => {
  return useQuery({
    queryKey: ['questions'],
    queryFn: fetcher
    
  })
}

export default useQuestions