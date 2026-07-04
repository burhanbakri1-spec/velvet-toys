import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Brands from '../pages/Brands/Brands';
import BrandDetail from '../pages/BrandDetail/BrandDetail';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import News from '../pages/News/News';
import NewsArticle from '../pages/NewsArticle/NewsArticle';
import Contact from '../pages/Contact/Contact';
import Careers from '../pages/Careers/Careers';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from '../pages/TermsOfUse/TermsOfUse';
import Cookies from '../pages/Cookies/Cookies';
import WhereToBuy from '../pages/WhereToBuy/WhereToBuy';
import Snackles from '../pages/Snackles/Snackles';
import NotFound from '../pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'brands', element: <Brands /> },
      { path: 'brands/:brand', element: <BrandDetail /> },
      { path: 'brands/:brand/:product', element: <ProductDetail /> },
      { path: 'news', element: <News /> },
      { path: 'news/:slug', element: <NewsArticle /> },
      { path: 'contact', element: <Contact /> },
      { path: 'careers', element: <Careers /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-use', element: <TermsOfUse /> },
      { path: 'cookies', element: <Cookies /> },
      { path: 'where-to-buy', element: <WhereToBuy /> },
      { path: 'snackles', element: <Snackles /> },
      { path: 'voluntary-recall-notice', element: <Snackles /> },
      { path: 'our-response', element: <Snackles /> },
      { path: 'levelling-the-playing-field-dream-day-with-tyson', element: <NewsArticle /> },
      { path: 'new-york-magazine-speaks-with-our-ceo-nick-mowbray-on-mini-brands-sell-out-success', element: <NewsArticle /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
