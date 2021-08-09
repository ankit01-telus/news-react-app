import { screen, waitFor } from '@testing-library/react'
import { renderWithRouter } from 'utils'
import App from 'App'


describe("Test app navigation", ()=> {
    it("It should navigate to 404 page when no match", async ()=> {
        renderWithRouter(<App />, { route: '/no-match' })
        await waitFor(()=> {
            expect(screen.getByText('Page not found.')).toBeInTheDocument()
        }) 
    })
})