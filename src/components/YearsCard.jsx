import React, { useState } from 'react'

const YearsCard = ({ actions }) => {
    const [yearOne, setYearOne] = useState(false);
    const [yearTwo, setYearTwo] = useState(false);
    const [yearThree, setYearThree] = useState(false);

    const changeDetector = (e) => {
        switch (e.target.name) {
            case 'first':
                setYearOne(prev => !prev)
                actions.actionOne();
                break;

            case 'second':
                setYearTwo(prev => !prev)
                actions.actionTwo();
                break;

            case 'third':
                setYearThree(prev => !prev)
                actions.actionThree();
                break;
        }
    }

    return (
        <div className=''>
            <h1 className='bg-yellow-500 m-2'>Checkbox Card</h1>
            <div className='w-full mx-5 my-5'>
                <div className='flex space-x-2'>
                    <input
                        type='checkbox'
                        checked={yearOne}
                        onChange={changeDetector}
                        name='first'
                    />
                    <label>2021</label>
                </div>
                <div className='flex space-x-2'>

                    <input
                        type='checkbox'
                        checked={yearTwo}
                        onChange={changeDetector}
                        name='second'
                    />
                    <label>2022</label>
                </div>
                <div className='flex space-x-2'>

                    <input
                        type='checkbox'
                        checked={yearThree}
                        onChange={changeDetector}
                        name='third'
                    />
                    <label>2023</label>
                </div>
            </div>
        </div>
    )
}

export default YearsCard