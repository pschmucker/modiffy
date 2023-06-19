import { render } from '@testing-library/react'
import { Diff } from '../src'


it ('Renders new object', () => {
    render(<Diff oldValue={null} newValue={{ firstName: 'Phil', age: 35 }} />);
});

it ('Renders equal objects', () => {
    render(<Diff oldValue={{ firstName: 'Phil', age: 35 }} newValue={{ firstName: 'Phil', age: 35 }} />);
});

it ('Renders added property', () => {
    render(<Diff oldValue={{ firstName: 'Phil' }} newValue={{ firstName: 'Phil', age: 35 }} />);
});

it ('Renders removed property', () => {
    render(<Diff oldValue={{ firstName: 'Phil', age: 35 }} newValue={{ firstName: 'Phil' }} />);
});

it ('Renders updated property', () => {
    render(<Diff oldValue={{ firstName: 'Phil', age: 34 }} newValue={{ firstName: 'Phil', age: 35 }} />);
});

it ('Renders array modifications', () => {
    render(<Diff oldValue={{ movies: [ { title: 'Armaggeddon'}, { title: 'Inception'}, { title: 'Interstellar'} ] }} newValue={{ movies: [ { title: 'Armageddon'}, { title: 'Interstellar'}, { title: 'Tenet'} ] }} />);
});

it ('Renders complex object with nested modifications', () => {
    render(<Diff oldValue={{ title: 'Dune', director: { name: 'Villeneuve' }, synopsis: null, releaseDate: '2021-10-22T00:00:00.000Z', actors: [ 'Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya' ], reviews: [], soundMix: [ 'Auro 11.1', 'Dolby Surround 7.1', 'Dolby Atmos', 'Dolby Digital', 'IMAX 6-Track' ], writers: [ { fullName: 'Jon Spaihts' }, { fullName: 'Denis Villeneuve' }, { fullName: 'Eric Roth' } ] }} newValue={{ title: 'Dune', director: { name: 'Denis Villeneuve' }, synopsis: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset while its heir becomes troubled by visions of a dark future.', actors: [ 'Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya', 'Oscar Isaac', 'Jason Momoa' ], reviews: [ { title: 'I loved it!', content: 'Everything from the visuals to the score and acting was easy 10/10. The only issue I had was the development and backstory behind each of the main characters, which I feel could\'ve been handled a bit better. This film is definitely not going to be everyone\'s cup of tea when it comes to pacing, but I personally liked that it took its time and had no issue with it. Dune is easily one of the best films I have seen in a long time and in terms of scale and epicness it is right up there with Lord of the Rings.' } ], details: { releaseDate: '2021-10-22T00:00:00.000Z' } }} />);
});

it ('Renders added object with null property', () => {
    render(<Diff oldValue={{}} newValue={{ person: { firstName: 'Phil', age: null }}} />);
});

it ('Renders removed object with null property', () => {
    render(<Diff oldValue={{ person: { firstName: 'Phil', age: null }}} newValue={{}} />);
});
