import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/vue'
import Home from './Home.vue'

describe('Home', () => {

  it('should load the home view with the Loader, then the Header', async () => {
    const { getByText } = render(Home)
    const Loader = getByText('Loading...')
    
    expect(Loader).toBeInTheDocument()
    // Now let's test the header appears after the loader
    await waitFor(() => expect(screen.getByText('Ordinary Drink')).toBeInTheDocument())
  })

  it('should not be a flying spaghetti monster', () => {
    const { queryByText } = render(Home)
    const Monster = queryByText('Flying Spaghetti Monster')

    expect(Monster).toBeFalsy() // The monster can not hurt you
  })
});