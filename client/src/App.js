import React, { Fragment } from "react";
import Home from "./components/Home";
import Reservations from "./components/Reservations";
import Rooms from "./components/Rooms";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Geobar from "./components/Geobar";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
// import { BackgroundImage } from './styles/AppStyles';
// import MainCarousel from './components/carousel/Carousel';
import "./App.css"
import ProtectedRoute from './components/ProtectedRoute';
import ReviewForm from './components/ReviewForm';
import Careers from './components/Careers';
import CareerForm from './components/CareerForm';
import Events from './components/Events';
import News from './components/News';

const App = () => (
  <Fragment>
    <FetchUser>

        <Geobar />
        <Navbar />

      <div style={styles.body}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/about_us" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/reservations" component={Reservations} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/news" component={News} />
          <Route exact path="/careers" component={Careers} />
          <ProtectedRoute path="/careerapply" component={CareerForm} />
          <ProtectedRoute path="/review" component={ReviewForm} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      <Footer style={styles.footer} />
    </FetchUser>
  </Fragment>
);

export default App;

const styles = {
  body: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  footer: {
    margin: "auto auto 0 auto"
  }
};

// const imageStyles = {
//   size: {
//       backgroundPosition: 'center top',
//       backgroundSize: '100% 50%',
      // width: '1500px',
      // height: '20%',
      // display: 'flex',
      // flex: '1',
      // resizeMode: 'cover',

//   }
// };
