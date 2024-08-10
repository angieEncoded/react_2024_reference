import React from 'react'
import { CORE_CONCEPTS } from '../../util/data';
import CoreConcept from './CoreConcept';

const CoreConcepts = () => {
    return (

        <section id="core-concepts">
            <h2>Core Concepts</h2>

            <ul>
                {CORE_CONCEPTS.map((item) =>
                    <CoreConcept key={item.title} title={item.title} description={item.description} image={item.image} />
                )}

                {/* OR */}

                {CORE_CONCEPTS.map((item) =>
                    <CoreConcept key={item.title} {...item} />
                )}

                {/* OR */}
                {/* Passing in props to the component we are calling */}
                <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />

                {/* Alternative concept using the spread operator to grab the data, only works if the keys match */}
                <CoreConcept {...CORE_CONCEPTS[1]} />
                <CoreConcept {...CORE_CONCEPTS[2]} />
                <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
        </section>
    )
}

export default CoreConcepts