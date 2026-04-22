

export default function SearchBar({search, setSearch}){

    return(
        <div className="search-bar">
            <input
        type="text"
        aria-label="Search recipes"
        placeholder="Search recipes..."
        value={search}
        onChange={(e)=> setSearch(e.target.value)} />

        </div>
    )
}


