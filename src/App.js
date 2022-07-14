import { Container, Grid } from '@material-ui/core';
import Portfolio from 'pages/Portfolio/Portfolio';
import Profile from 'components/Profile/Profile';
import './App.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Resume from 'pages/Resume/Resume';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor : 'green'}}>
          <Profile/>
        </Grid>
        <Grid item xs={8} style={{backgroundColor : 'red'}}>
          <Header/>
            <Router>
              <Routes>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/" element={<Resume />} />
              </Routes>
            </Router>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
