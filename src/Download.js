import UseFetch from './UseFetch'
import { useEffect } from 'react'
import image from './weekend.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";


function Download() {
    const { playlists, isPending, error, filtered, filteredPlaylists, all} = UseFetch("/playlists")

    useEffect(() => {
        Aos.init({ duration: 1700 });
    }, []);
    return (
        <header className='hero-container'>

            <main className='collection-container' data-aos="fade-up" data-aos-offset="200" data-aos-easing="linear">
                <section className='hero'>
                    <div className='hero-text' >
                        <h1>Blinding Lights</h1>
                        <h4>The Weekend</h4>
                        <p>After silence, that which comes nearest to expressing the inexperessible is music.</p>
                        <section className='bars'>
                            <div className='long'></div>
                            <div className='dot'></div>
                            <div className='dot'></div>
                            <div className='dot'></div>
                        </section>

                    </div>
                    <img src={image} alt='theWeekend' className='hero-image' />
                </section>

                <section>
                    <h4 className='collection-heading'>Collections</h4>

                </section>
                <section className="collection">
                    <section className="box one" onClick={() => filtered('Pop')}>
                        <h1>01</h1>
                        <h4>Pop</h4>
                        <h4 >music</h4>
                        <p>294 songs</p>
                    </section>
                    <section className="box two" onClick={() => filtered('R&B')}>
                        <h1>02</h1>
                        <h4>R&B</h4>
                        <h4>music</h4>
                        <p>303 songs</p>
                    </section><section className="box three" onClick={all}>
                        <h1>03</h1>
                        <h4>All</h4>
                        <h4>music</h4>
                        <p>597 songs</p>
                    </section>
                </section>
                <section className='blue-box'>
                    <section className='content'>
                    <img src='Images/weekend.jpg' alt='coverimages' className='img'/>
                        <section>
                            <h5> Blinding Lights </h5>
                            <p>The Weekend </p>
                        </section>
                        <audio controls src='songs/BlindingLights.mp3'> </audio>
                    </section>
                </section>
            </main>

            <section className='download'>
                <h4 className='download-heading'>Downloads</h4>
                {isPending && <h1 style={{ marginLeft: '2.5rem', marginTop: '3rem'}}>...</h1>}
                {error && <p>{error}</p>}
                {filteredPlaylists ? filteredPlaylists.map((playlist) => (
                    <section className="download-preview" key={playlist.id}>
                        <section className='download-content'>
                            <img src={playlist.coverimage} alt='playlist-cover-images' className='img'/>
                            <section>
                                    <h5>{playlist.title}</h5>
                                    <p>{playlist.artiste}</p>
                            </section>
                            <audio controls src={playlist.music}></audio>
                        </section>
                    </section>
                )) : playlists && playlists.map((playlist) => (
                    <section className="download-preview" key={playlist.id}>
                        <section className='download-content'>
                            <img src={playlist.coverimage} alt='playlist-cover-images' className='img' />
                            <section>
                                    <h5>{playlist.title}</h5>
                                    <p>{playlist.artiste}</p>
                            </section>
                                <audio controls src={playlist.music}></audio> 
                        </section>
                    </section>
                ))
                }
            </section>
        </header>
    )
}

export default Download