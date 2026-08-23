import {useState} from 'react';
import Header from './Components/header'
import './Components/header.css';
import Main from './Components/main'
import './Components/main.css';
import Footer from './Components/footer'
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };
  return (
    <div>
      <Header />
      <Main />
      <Footer year={2026} company="Malik Yasir" />
    </div>
  );
}
export default App;