import {Link} from 'react-router'

function NavBar() {
  return (
    <div>
      <Link to={'/'}>Home Page</Link> &emsp;
      <Link to={'/products'}>Products</Link> &emsp;
      <Link to={'/new-product'}>New Product</Link>

    </div>
  )
}

export default NavBar