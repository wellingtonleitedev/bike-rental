import Header from 'components/Header'
import BikeList from 'components/BikeList'
import Bike from 'models/Bike'
import { Content } from './Home.styles'

interface HomeProps {
  bikes: Bike[]
  isLoading?: boolean
}

const Home = ({ bikes, isLoading = true }: HomeProps) => {
  return (
    <div data-testid='home-page'>
      <Header />
      <Content>
        <BikeList bikes={bikes} isLoading={isLoading} />
      </Content>
    </div>
  )
}

export default Home
