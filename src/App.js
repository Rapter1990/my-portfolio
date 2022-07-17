import { Container, Grid } from '@material-ui/core';
import Portfolio from 'pages/Portfolio/Portfolio';
import Profile from 'components/Profile/Profile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Resume from 'pages/Resume/Resume';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Contact from 'pages/Contact/Contact';
import Service from 'pages/Service/Service';

function App() {
  return (
    <Container className={"top_30"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile/>
        </Grid>
        <Grid item xs={9}>
            <Router>
              <Header/>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
              </Routes>
            </Router>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
