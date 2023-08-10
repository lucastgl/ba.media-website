import About from './About'
import Footer from './Footer'
import Header from './Header'
import Partners from './Partners'
import Team from "./Team"
import TrackRecord from './TrackRecord'
import HomeProyectsGallery from './HomeProyectsGallery'

const Home = () => {

  return (
    <>
      <Header/>
      <About/>
      <HomeProyectsGallery/>
      <Partners/>
      <Team/>
      <TrackRecord/>
      <Footer/>
    </>
  )
}

export default Home;