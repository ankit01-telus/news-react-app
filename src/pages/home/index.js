import { lazy } from "react"
const HomeNewsData = lazy(()=> import('containers/homeNewsData'))
const Header = lazy(()=> import('components/header'))

/**
 * The Home page contains header and HomeNewsData component
 * @returns 
 */
export default function Home() {

    return (
        <div className="container" >
            <Header />
            <HomeNewsData />
        </div>
        
    )
}