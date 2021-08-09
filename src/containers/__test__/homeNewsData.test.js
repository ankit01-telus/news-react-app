import { screen } from '@testing-library/react'
import HomeNewsData from 'containers/homeNewsData'
import { renderWrapper, articles } from 'utils'


describe("Test HomeNewsData component", ()=> {

    it("It should display correct number of cards", async ()=> {
        renderWrapper(<HomeNewsData />, {
                all_news : {
                    data: {
                        articles
                    },
                    isFetching : false,
                    error: ""
                }
        })
        const item = await screen.queryAllByTestId("news-card")
        expect(item).toHaveLength(2)
    })

    it("It should display correct news card", ()=> {
        renderWrapper(<HomeNewsData />, {
                all_news : {
                    data: {
                        articles
                    },
                    isFetching : false,
                    error: ""
                }
        })
        const titleText =  screen.getByText("this is test title1")
        expect(titleText).toBeInTheDocument()
    })

    it("It should display loader", ()=> {
        
        renderWrapper(<HomeNewsData />, {
            all_news : {
                isFetching : true,
                error: ""
            }
        })
        const element =  screen.queryByTestId("page-loader")
        expect(element).toHaveTextContent('Loading...')
    })

    it("It should display error message when error occures", ()=> {
        renderWrapper(<HomeNewsData />, {
                all_news: {
                    isFetching: false,
                    error: "some error"
                }
        })

        const errorText = screen.queryByTestId("error-message")
        expect(errorText).toBeTruthy()
    })
})