import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <ul className="flex justify-center py-6">
          <li><NavLink to="/" className="text-7-bold">首頁</NavLink></li>
          <li><NavLink to="blog" className="text-7-bold ms-10">部落格</NavLink></li>
        </ul>
      </nav>
  )
}
export default Navbar