import NewsContainer from 'containers/newsContainer'
import { renderWrapper, articles } from 'utils'


describe("Test NewsContainer component", ()=> {
    it("It should render without crash", ()=> {
        const { getAllByTestId } = renderWrapper(<NewsContainer />)
        const component = getAllByTestId("news-container")
        expect(component).toHaveLength(1)
    })

    it("It should render correct props", ()=> {
        const { getByText } = renderWrapper(<NewsContainer data={articles[0]} />)
        const titleText = getByText("this is test title1")
        const author = getByText("Author: dubey")
        expect(titleText).toBeInTheDocument()
        expect(author).toBeInTheDocument()
    })

    it("It should show null if data is empty, should not crash", ()=> {
        const { getByTestId } = renderWrapper(<NewsContainer data={null} />)
        const titleText = getByTestId("title")
        const author = getByTestId("description")
        expect(titleText).toHaveTextContent("")
        expect(author).toHaveTextContent("")
    })

})