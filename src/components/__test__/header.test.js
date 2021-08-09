import { renderWrapper } from 'utils'
import Header from 'components/header'

describe('Header component', ()=> {
    it('It should render without error', ()=> {
        const { getAllByTestId } = renderWrapper(<Header />)
        const component = getAllByTestId("header-container")
        expect(component).toHaveLength(1)
    })

    it('It should have header text', ()=> {
        const { getByText } = renderWrapper(<Header />)
        const headerText = getByText("News App")
        expect(headerText).toBeInTheDocument()
    })
})