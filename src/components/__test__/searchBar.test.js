
import SearchBar from 'components/searchBar'
import { renderWrapper } from 'utils/testUtils'

describe("Search bar component", ()=>{
   

    it('It should render without error', ()=> {
        const { getAllByTestId } = renderWrapper(<SearchBar />)
        expect(getAllByTestId("search-container")).toHaveLength(1)
    })

    it('It should contains search input', ()=> {
        const { getByTestId } = renderWrapper(<SearchBar />)
        expect(getByTestId('search-input')).toBeTruthy()
    })

})