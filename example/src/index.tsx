import React from 'react'
import ReactDOM from 'react-dom/client'
import { Diff } from 'modiffy'
import './index.scss'

const debugMode = 'diff';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <>
            <div>
                <h2>New object</h2>
                <Diff oldValue={null} newValue={{ firstName: 'Phil', age: 35 }} expanded={true} debug={debugMode} />
            </div>
            <hr />
            <div>
                <h2>Equal objects</h2>
                <Diff oldValue={{ firstName: 'Phil', age: 35 }} newValue={{ firstName: 'Phil', age: 35 }} expanded={true} debug={debugMode} />
            </div>
            <hr />
            <div>
                <h2>Added property</h2>
                <Diff oldValue={{ firstName: 'Phil' }} newValue={{ firstName: 'Phil', age: 35 }} expanded={true} debug={debugMode} />
            </div>
            <hr />
            <div>
                <h2>Removed property</h2>
                <Diff oldValue={{ firstName: 'Phil', age: 35 }} newValue={{ firstName: 'Phil' }} expanded={true} debug={debugMode} />
            </div>
            <hr />
            <div>
                <h2>Updated property</h2>
                <Diff oldValue={{ firstName: 'Phil', age: 34 }} newValue={{ firstName: 'Phil', age: 35 }} expanded={true} debug={debugMode} />
            </div>
            <hr />
            <div>
                <h2>Array modifications</h2>
                <Diff oldValue={{ movies: [ { title: 'Armaggeddon'}, { title: 'Inception'}, { title: 'Interstellar'} ] }} newValue={{ movies: [ { title: 'Armageddon'}, { title: 'Interstellar'}, { title: 'Tenet'} ] }} expanded={true} debug={debugMode} />
            </div>
            <hr />
            <div>
                <h2>Complex object with nested modifications</h2>
                <Diff oldValue={{ title: 'Dune', director: { name: 'Villeneuve' }, synopsis: null, releaseDate: '2021-10-22T00:00:00.000Z', actors: [ 'Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya' ], reviews: [], soundMix: [ 'Auro 11.1', 'Dolby Surround 7.1', 'Dolby Atmos', 'Dolby Digital', 'IMAX 6-Track' ], writers: [ { fullName: 'Jon Spaihts' }, { fullName: 'Denis Villeneuve' }, { fullName: 'Eric Roth' } ] }} newValue={{ title: 'Dune', director: { name: 'Denis Villeneuve' }, synopsis: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset while its heir becomes troubled by visions of a dark future.', actors: [ 'Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya', 'Oscar Isaac', 'Jason Momoa' ], reviews: [ { title: 'I loved it!', content: 'Everything from the visuals to the score and acting was easy 10/10. The only issue I had was the development and backstory behind each of the main characters, which I feel could\'ve been handled a bit better. This film is definitely not going to be everyone\'s cup of tea when it comes to pacing, but I personally liked that it took its time and had no issue with it. Dune is easily one of the best films I have seen in a long time and in terms of scale and epicness it is right up there with Lord of the Rings.' } ], details: { releaseDate: '2021-10-22T00:00:00.000Z' } }} expanded={true} debug={debugMode} />
            </div>
        </>
    </React.StrictMode>
)
