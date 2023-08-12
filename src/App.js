import './App.css';
// import { createRoot } from 'react-dom/client';
import Row from'./Row';
import request from './request';
import Nav from './Nav'
import Banner from './Banner'
function App() {
  





  return (
    <div className="App">
      {
      <Nav />
      }
      {
        <Banner/>
      }
      
      <Row title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchURL={request.fetchTrending}/>
      <Row title="Top Rated" fetchURL={request.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={request.fetchDocumantaries}/>
      
    </div>
  );
}

export default App;
