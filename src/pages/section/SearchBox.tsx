import { BsSearch } from "react-icons/bs";
const SearchBox = () => {
return (
  <div className="border border-gray-500 p-4 rounded-[40px] flex content-center gap-[10px] lg:w-[416px]">
    <BsSearch size={24} color="#4b4b4b" />
    <input type="text" name="search" id="search" placeholder="搜尋你感興趣的文章" className="placeholder-500 focus:outline-none"/>
  </div>
)
}
export default SearchBox ;