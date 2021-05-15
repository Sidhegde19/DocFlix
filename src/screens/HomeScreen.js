import React from 'react'
import Banner from '../Banner';
import './HomeScreen.css';
import Nav from '../Nav';
import requests from '../Requests'
import Row from "../Row";

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />

            <Banner />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} isLargeRow />
            <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default HomeScreen;
