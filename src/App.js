import logo from './logo.png';
import headshot from './headshot.jpg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container className="mb-5">
        <Row className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <Col sm={4}>
            <Image src={headshot} rounded fluid />
          </Col>
          <Col sm={8}>
            <p>Welcome to Embodied Kiddos!</p>
            <p>
              I’m Kristen (she/her).  I’m a marriage and family therapy associate, a certified body trust provider, a mom, and an early childhood development geek. I haved worked with parents of young children to help develop resilience against diet culture and to strengthen children’s innate skill of intuitive eating. I was a preschool teacher before becoming a parent and my passion is supporting parents so they can support their kiddos. I’m part of a growing community of health care providers that believe in shifting the focus away from weight and to more intrinsic markers of health. I believe that meal time is an early playground to practice long term life lessons like consent, pleasure, autonomy, connection and trust.
            </p>
            <p>
              If you are located in Oregon and are looking for a therapist, please reach out to me at <a href="https://familyrootstherapy.com/project/kristen-scher/" target="_blank" rel="noopener noreferrer">Family Roots Therapy</a>.
            </p>
             <p>
              If you are interested in purchasing resources from my <em>Raising Embodied Kiddos</em> course, please send me an email at <a href="mailto:kristen@embodiedkiddos.com" target="_blank" rel="noopener noreferrer">kristen@embodiedkiddos.com</a>.
            </p>
            <a className="icon-link" href="https://www.instagram.com/embodiedkiddos">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
