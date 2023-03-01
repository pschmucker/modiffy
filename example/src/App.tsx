import { Diff } from 'modiffy'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';


type AppProps = Record<string, never>;

export const App: FC<AppProps> = () => {
    const { t } = useTranslation();

    const debugMode = 'full';

    return (<>
        <div>
            <h1>{ t('title.newObject') }</h1>
            <section>
                <Diff expanded={true} debug={debugMode}
                    oldValue={null}
                    newValue={{ firstName: 'Phil', age: 35 }}
                />
            </section>
        </div>
        <hr />
        <div>
            <h1>{ t('title.equalObjects') }</h1>
            <section>
                <Diff expanded={true} debug={debugMode}
                    oldValue={{ firstName: 'Phil', age: 35 }}
                    newValue={{ firstName: 'Phil', age: 35 }}
                />
            </section>
        </div>
        <hr />
        <div>
            <h1>{ t('title.addedProperty') }</h1>
            <section>
                <Diff expanded={true} debug={debugMode}
                    oldValue={{ firstName: 'Phil' }}
                    newValue={{ firstName: 'Phil', age: 35 }}
                />
            </section>
        </div>
        <hr />
        <div>
            <h1>{ t('title.removedProperty') }</h1>
            <section>
                <Diff expanded={true} debug={debugMode}
                    oldValue={{ firstName: 'Phil', age: 35 }}
                    newValue={{ firstName: 'Phil' }}
                />
            </section>
        </div>
        <hr />
        <div>
            <h1>{ t('title.updatedProperty') }</h1>
            <section>
                <Diff expanded={true} debug={debugMode}
                    oldValue={{ firstName: 'Phil', age: 35, enabled: false }}
                    newValue={{ firstName: 'Phil', age: 35, enabled: true }}
                />
            </section>
        </div>
        <hr />
        <div>
            <h1>{ t('title.arrayModifications') }</h1>
            <section>
                <Diff expanded={true} debug={debugMode}
                    oldValue={{ movies: [ { title: 'Armaggeddon', year: 1998 }, { title: 'Inception', year: 2010 }, { title: 'Interstellar', year: 2014 } ] }}
                    newValue={{ movies: [ { title: 'Armageddon', year: 1998 }, { title: 'Interstellar', year: 2014 }, { title: 'Tenet', year: 2020 } ] }}
                />
            </section>
        </div>
        <hr />
        <div>
            <h1>{ t('title.complexObjectWithNestedModifications') }</h1>
            <section>
                <Diff expanded={true} debug={debugMode}
                    oldValue={{ title: 'Dune', director: { name: 'Villeneuve' }, synopsis: null, releaseDate: '2021-10-22T00:00:00.000Z', actors: [ 'Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya' ], reviews: [], soundMix: [ 'Auro 11.1', 'Dolby Surround 7.1', 'Dolby Atmos', 'Dolby Digital', 'IMAX 6-Track' ], writers: [ { fullName: 'Jon Spaihts' }, { fullName: 'Denis Villeneuve' }, { fullName: 'Eric Roth' } ] }}
                    newValue={{ imdbId: 'tt1160419', title: 'Dune', director: { name: 'Denis Villeneuve' }, synopsis: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset while its heir becomes troubled by visions of a dark future.', actors: [ 'Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya', 'Oscar Isaac', 'Jason Momoa' ], reviews: [ { title: 'I loved it!', content: 'Everything from the visuals to the score and acting was easy 10/10. The only issue I had was the development and backstory behind each of the main characters, which I feel could\'ve been handled a bit better. This film is definitely not going to be everyone\'s cup of tea when it comes to pacing, but I personally liked that it took its time and had no issue with it. Dune is easily one of the best films I have seen in a long time and in terms of scale and epicness it is right up there with Lord of the Rings.' } ], details: { releaseDate: '2021-10-22T00:00:00.000Z' }, quotes: [ { character: 'Lady Jessica Atreides', content: 'I must not fear. Fear is the mind-killer. Fear is the little death that brings obliteration. I will face my fear and I will permit it to pass over me and through me. And when it has gone past... I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.' } ] }}
                />
            </section>
        </div>
    </>);
}
