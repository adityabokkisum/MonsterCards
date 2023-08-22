import { ChangeEventHandler } from "react";
import "./search-box.styles.css"

type searchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({className,placeholder,onChangeHandler}:searchBoxProps) => (
        <input className={`search-box ${className}`} placeholder={placeholder} type="search" onChange={onChangeHandler}/>
    )

export default SearchBox