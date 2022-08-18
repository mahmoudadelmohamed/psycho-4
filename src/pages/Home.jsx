import React from 'react';
import Main from '../Main/Main';
import Row from '../Row';
import Requests from '../Requests';

const Home = () => {
  return (
    <>
        <Main />
        <Row title='Up Coming' fetchURL={Requests.requestUpcoming} />
        <Row title='Poular' fetchURL={Requests.requestPoular} />
        <Row title='Trending' fetchURL={Requests.requestTrending} />
        <Row title='Top Rated' fetchURL={Requests.requestTopRated} />
        <Row title='Horror' fetchURL={Requests.requestHorror} />
    </>
  )
}

export default Home