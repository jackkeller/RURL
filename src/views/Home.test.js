import '@testing-library/jest-dom'
import { render } from '@testing-library/vue'
import Home from './Home.vue'

describe('Home', () => {

  it('should load the home view with the header Home Page', () => {
    const { getByText } = render(Home)
    const Header = getByText('Drinks')
    
    expect(Header).toBeInTheDocument()
  })

  it('should not be a flying spaghetti monster', () => {
    const { queryByText } = render(Home)
    const Monster = queryByText('Flying Spaghetti Monster')

    expect(Monster).toBeFalsy() // The monster can not hurt you
  })
});