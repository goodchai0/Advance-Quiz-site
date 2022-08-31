import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Questions from './pages/Questions';
import Settings from './pages/Settings';
import FinalScreen from './pages/FinalScreen';
import { Container } from "@mui/system";
import {Box} from '@mui/system';

function App() {
  return (
      <BrowserRouter>
      <Container maxWidth='sm'>
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/"  element={<Settings />} />
            <Route path="/questions"  element={<Questions />} />
            <Route path="/score"  element={<FinalScreen />} />
          </Routes>
        </Box>
          
      </Container>
        
      </BrowserRouter>
  );
}

export default App;