// import './App.css'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import Form from './components/Form.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Card 
          name={'Napilotana'}
          price={432}
          img={'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c'}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        />
        <Card 
          name={'Española'}
          price={765}
          img={'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab'}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        />
      </main>
      <Form />
      <Footer />
    </>
  )
}

export default App
