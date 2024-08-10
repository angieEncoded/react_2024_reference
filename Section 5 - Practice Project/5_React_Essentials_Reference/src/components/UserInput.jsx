const UserInput = ({onChangeInput, investmentValues}) => {



    return (
        <>
            <section id="user-input">
                <div className='input-group'>
                    <p>
                        <label>Initial Investment</label>
                        <input
                            type="number"
                            value={investmentValues.initialInvestment}
                            required onChange={(event) => onChangeInput("initialInvestment", event.target.value)} />
                    </p>
                    <p>
                        <label>Annual Investment</label>
                        <input
                        type="number"
                        value={investmentValues.annualInvestment}
                        required onChange={(event) => onChangeInput("annualInvestment", event.target.value)} />
                    </p>
                </div>
                <div className='input-group'>
                    <p>
                        <label>Expected Return</label>
                        <input
                        type="number"
                        value={investmentValues.expectedReturn}
                        required
                        onChange={(event) => onChangeInput("expectedReturn", event.target.value)} />
                    </p>
                    <p>
                        <label>Duration</label>
                        <input
                        value={investmentValues.duration}
                        type="number"
                        required
                        onChange={(event) => onChangeInput("duration", event.target.value)}/>
                    </p>
                </div>
            </section>

        </>
    )
}

export default UserInput