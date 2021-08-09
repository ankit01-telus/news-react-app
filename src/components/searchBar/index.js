import { Input, InputGroup } from 'reactstrap'
import { useSearch } from 'hooks/searchHook'
import './searchBar.css'

function SearchBar() {
    const [searchText, handleSearch] = useSearch()

    return <div data-testid="search-container">
        <InputGroup size="lg" className="search-input" >
            <Input data-testid="search-input" type="text" placeholder="Search News" value={searchText} onChange={handleSearch} />
        </InputGroup>
    </div>
}

export default SearchBar