import { instance } from '../../../../api/instance'
import { useQuery } from '@tanstack/react-query'

type Skill = {
  name: string
  description: string
}

export const useGetSkills = () => {
  
  return useQuery({
    queryKey: ['myskill'],
    queryFn: async () => {
      const { data } = await instance.get<Skill[]>('/myskill')
      return data
    },
    refetchOnWindowFocus: false,
    retry: false,
  })
}
