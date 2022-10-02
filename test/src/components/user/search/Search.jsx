import { useState } from "react";
import { Link } from "react-router-dom";

function Search({ list , model}) {
    const [search, setSearch] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div>
            <input
                name="search"
                onChange={e => { handleChange(e) }}
                style={{ borderStyle: "solid" }}
            ></input>
            <button>Click</button>
            <div>
                {/* search user */}
                {model == "user" && list && list.filter((item)=>{
                    if(search == ""){
                        return ;
                    }
                    else if(item.name.toLowerCase().includes(search.toLowerCase())){
                        return item
                    }
                })
                .map((item) => (
                    <Link>{list.name}</Link>
                ))}
                {/* search product */}
                {model == "product" && list && list.filter((item)=>{
                    if(search == ""){
                        return ;
                    }
                    else if(item.name.toLowerCase().includes(search.toLowerCase())){
                        return item
                    }
                })
                .map((item) => (
                    <Link>{list.name}</Link>
                ))}
               
            </div>
        </div>
    )
}
export default Search;  