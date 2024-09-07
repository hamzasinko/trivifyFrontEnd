import { ChakraProvider } from '@chakra-ui/react';
import AppTemplate from './Components/AppTemplate/AppTemplate';
import LoginForm from './Components/Login/LoginForm';
import RegisterForm from './Components/Register/RegisterForm';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact.js/Contact';
import CreateRoom from './Components/Room/CreateRoom';
import { useSelector } from 'react-redux';
import Erreur from './Components/Erreur';
import Room from './Components/Room/Room';
import CreateQuiz from './Components/Quiz/CreateQuiz';
import { Navigate } from 'react-router-dom';

function App() {
  const roomUrl = useSelector((state) => state.app.roomUrl);
  const logged = useSelector((state) => state.app.isLogged);

  return (
    <ChakraProvider>
      <AppTemplate>
        <Router>
          {logged ? (
            <Routes>
              {/* Private routes accessible only when logged in */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/room/create" element={<CreateRoom />} />
              <Route path="/quiz/create" element={<CreateQuiz />} />
              <Route path="/" element={<Home />} />
              {roomUrl === "" 
                ? <Route path="/room/*" element={<Erreur />} /> 
                : <Route path={`/room/${roomUrl}`} element={<Room />} />
              }
              {/* Handle unknown routes */}
              <Route path="*" element={<Erreur />} />
            </Routes>
          ) : (
            // Redirect to login for all other routes if not logged in
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              {/* Redirect to login for any other route */}
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </Router>
      </AppTemplate>
    </ChakraProvider>
  );
}

export default App;
