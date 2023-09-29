import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Product from '../pages/Product';
import MainLayout from '../layouts/MainLayout';

const MainRouter = () => {
    return (
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/product/:itemId" element={<Product />} />
          </Routes>
        </MainLayout>
      </Router>
    )
}

export default MainRouter
