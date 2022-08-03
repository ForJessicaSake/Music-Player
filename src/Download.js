import UseFetch from './UseFetch'
import { RiPlayLine, RiPauseCircleLine } from 'react-icons/ri';
import image from './weekend.jpg'


function Download() {
    const { playlists, isPending, error, handleClickAfro, handleClickPop, handleClickRB } = UseFetch("http://localhost:7000/playlists")


    return (
        <header className='download-container'>

            <main className='collection-container'>
                <section className='hero'>
                    <div className='hero-text'>
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
                    <h4 className='download-heading'>Collections</h4>

                </section>
                <section className="collection">
                    <section className="box one" onClick= {handleClickPop}>
                        <h1>01</h1>
                        <h4>Pop</h4>
                        <h4 >music</h4>
                        <p>294 songs</p>
                    </section>
                    <section className="box two" onClick={handleClickRB}>
                        <h1>02</h1>
                        <h4>R&B</h4>
                        <h4>music</h4>
                        <p>303 songs</p>
                    </section><section className="box three" onClick={handleClickAfro}>
                        <h1>03</h1>
                        <h4>AfroBeats</h4>
                        <h4>music</h4>
                        <p>161 songs</p>
                    </section>
                </section>

            </main>
            <section data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h4 className='download-heading'>Downloads</h4>
                {isPending && <h4>Loading...</h4>}
                {error && <p>{error}</p>}
                {playlists && playlists.map((playlist) => (
                    <section className="download-preview" key={playlist.id}>
                        <section className='download-content'>
                            <img src={playlist.coverimage} alt='playlist-cover-images' className='img' />
                            <section>
                                <ul>
                                    <h5>{playlist.title}</h5>
                                    <p>{playlist.artiste}</p></ul>
                            </section>
                            <aside className='pause-button'>
                                <RiPlayLine className='button' />
                                <RiPauseCircleLine className='button' />
                            </aside>
                        </section>
                    </section>
                ))
                }
            </section>

        </header>
    )
}

export default Download