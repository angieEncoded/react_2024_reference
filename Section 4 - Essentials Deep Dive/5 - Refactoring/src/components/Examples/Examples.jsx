import React from 'react'
import TabButton from '../TabButton/TabButton'
import { EXAMPLES } from '../../util/data'
import { useState } from 'react'

const Examples = () => {

    // State slices are always called in here
    const [selectedTopic, setSelectedTopic] = useState(''); // we can use const because it will be 're-read' every time the state is updated. Brand new const.
    // const [topicSelected, setTopicSelected] = useState(false);

    // only callable inside this function
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton); // set the text here to the selected button
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                {/* We use an anonymous arrow function to execute that, and then execute the handle select inside which allows us to send in parameters */}
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>

            {!selectedTopic && <p>Please select a topic</p>}
            {selectedTopic &&
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>
            }

        </section>
    )
}

export default Examples