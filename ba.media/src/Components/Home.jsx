import About from './About'
import Footer from './Footer'
import Header from './Header'
import Partners from './Partners'
import Team from "./Team"
import TrackRecord from './TrackRecord'
import ProyectsGallery from './ProyectsGallery'

const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <ProyectsGallery/>
      <Partners/>
      <Team/>
      <TrackRecord/>
      <Footer/>
    </>
  )
}

export default Home;