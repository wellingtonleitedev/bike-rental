import Home from './Home.component'
import { useQuery } from '@tanstack/react-query'
import { getBikes } from 'services'

const oneMinute = 1000 * 60

const HomeContainer = () => {
  const { data: bikes = [], isLoading } = useQuery({
    queryKey: ['bikes'],
    queryFn: getBikes,
    staleTime: oneMinute,
  })

  return <Home bikes={bikes} isLoading={isLoading} />
}

export default HomeContainer
