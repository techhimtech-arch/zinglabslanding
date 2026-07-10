import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Categories from './components/Categories';
import WhyZinglabs from './components/WhyZinglabs';
import Roadmap from './components/Roadmap';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  logo: string;
  url: string;
  status: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error('Failed to load products:', err));
  }, []);

  return (
    <div className="page-shell min-h-screen bg-dark-900 text-dark-100">
      <div className="absolute inset-x-0 top-0 h-[48rem] bg-gradient-to-b from-sky-500/10 via-transparent to-transparent pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <Products products={products} />
        <Categories />
        <WhyZinglabs />
        <Roadmap products={products} />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
