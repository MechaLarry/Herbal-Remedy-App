// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Homepage from './components/Homepage';
// import AboutUsPage from './components/AboutUsPage';
// import ProductsPage from './components/ProductsPage';
// import ContactPage from './components/ContactPage';
// // import PostPage from './components/PostPage';
// // import EditPage from './components/EditPage'; // Import the EditPage component
// // import DeletePage from './components/DeletePage'; // Import the DeletePage component
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/about" element={<AboutUsPage />} />
//           <Route path="/products" element={<ProductsPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           {/* <Route path="/add" element={<PostPage addProduct={addProduct} />} /> */}
//           {/* <Route path="/edit/:id" element={<EditPage products={products} editProduct={editProduct} />} /> */}
//           {/* <Route path="/delete/:id" element={<DeletePage products={products} deleteProduct={deleteProduct} />} /> */}
//          </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Homepage from './components/Homepage';
// import AboutUsPage from './components/AboutUsPage';
// import ProductsPage from './components/ProductsPage';
// import ContactPage from './components/ContactPage';
// import DetailPage from './components/productDetailPage'; // Import the DetailPage component

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/about" element={<AboutUsPage />} />
//           <Route path="/products" element={<ProductsPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/herb/:id" element={<DetailPage />} /> {/* Add route for DetailPage */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutUsPage from './components/AboutUsPage';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';
import DetailPage from './components/productDetailPage';
import CreatePage from './components/CreatePage'; // Import the CreatePage component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/create" element={<CreatePage />} /> {/* Add the route for CreatePage */}
          <Route path="/herbs/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
