import React, { useState, useEffect } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const monthsRange = [
    "Jan - Apr", "May - Aug", "Sep - Dec"
]

const data1 = [{ txt: "Jan", id: 0, name: 'first' }, { txt: "Feb", id: 1, name: 'second' }, { txt: "Mar", id: 2, name: 'third' }, { txt: "Aprail", id: 3, name: 'fourth' }]

const data2 = [{ txt: "May", id: 0, name: 'first' }, { txt: "June", id: 1, name: 'second' }, { txt: "July", id: 2, name: 'third' }, { txt: "Aug", id: 3, name: 'fourth' }]

const data3 = [{ txt: "Sep", id: 0, name: 'first' }, { txt: "Oct", id: 1, name: 'second' }, { txt: "Nov", id: 2, name: 'third' }, { txt: "Dec", id: 3, name: 'fourth' }]




const YearCard = ({ year }) => {

    const [selectedRange, setSelectedRange] = useState(null);
    const [data, setData] = useState([]);
    const [active, setActive] = useState(null);


    const [firstInput, setFirstInput] = useState(0);
    const [secondInput, setSecondInput] = useState(0)
    const [thirdInput, setThirdInput] = useState(0);
    const [fourthInput, setFourthInput] = useState(0)
    const [fifthInput, setFifttInput] = useState(0);
    const [sixthInput, setSixthInput] = useState(0)
    const [seventhInput, setSeventhInput] = useState(0);
    const [eigthInput, setEightInput] = useState(0)
    const [ninthInput, setNinthInput] = useState(0);
    const [tenthInput, setTenthInput] = useState(0)
    const [elevInput, setElevInput] = useState(0);
    const [tweleInput, setTweleInput] = useState(0)


    const rangeChangeHandler = (e) => {
        setSelectedRange(e.value)
    }

    useEffect(() => {
        if (selectedRange !== null) {
            if (selectedRange === 'Jan - Apr') {
                setData(data1);
                setActive(0)
            }
            else if (selectedRange === 'May - Aug') {
                setData(data2);
                setActive(1)
            }
            else if (selectedRange === 'Sep - Dec') {
                setData(data3);
                setActive(2)
            }
        }
    }, [selectedRange])

    const resetButtonClick = () => {
        if (active === 0) {
            setFirstInput(0);
            setSecondInput(0);
            setThirdInput(0);
            setFourthInput(0);
        }

        if (active === 1) {
            setFifttInput(0);
            setSixthInput(0);
            setSeventhInput(0);
            setEightInput(0);
        }

        if (active === 2) {
            setNinthInput(0);
            setTenthInput(0);
            setElevInput(0);
            setTweleInput(0);
        }


    }


    const calculateClickHandler = () => {
        if (active === 0) {
            let value;

            if (firstInput !== 0) value = firstInput;
            else if (secondInput !== 0) value = secondInput;
            else if (thirdInput !== 0) value = thirdInput;
            else if (fourthInput !== 0) value = fourthInput;

            setFirstInput(value)
            const random1 = Math.ceil(Math.random() * 100) + value;
            secondInput(random1);
            const random2 = Math.ceil(Math.random() * 100) - value;
            thirdInput(random2);
            const random3 = Math.ceil(Math.random() * 100) + value;
            fourthInput(random3);
        }

        else if (active === 1) {
            let value;

            if (fifthInput !== 0) value = fifthInput;
            else if (sixthInput !== 0) value = sixthInput;
            else if (seventhInput !== 0) value = seventhInput;
            else if (eigthInput !== 0) value = eigthInput;

            setFifttInput(value)
            const random1 = Math.ceil(Math.random() * 100) + value;
            setSixthInput(random1);
            const random2 = Math.ceil(Math.random() * 100) - value;
            setSeventhInput(random2);
            const random3 = Math.ceil(Math.random() * 100) + value;
            setEightInput(random3);
        }

        else if (active === 2) {
            let value;

            if (ninthInput !== 0) value = ninthInput;
            else if (tenthInput !== 0) value = tenthInput;
            else if (elevInput !== 0) value = elevInput;
            else if (tweleInput !== 0) value = tweleInput;

            setNinthInput(value)
            const random1 = Math.ceil(Math.random() * 100) + value;
            setTenthInput(random1);
            const random2 = Math.ceil(Math.random() * 100) - value;
            setElevInput(random2);
            const random3 = Math.ceil(Math.random() * 100) + value;
            setTweleInput(random3);
        }

    }


    return (
        <div className='bg-yellow-500'>
            <div className='flex w-full justify-between px-5 py-2 font-bold'>
                <h1>{`Year ${year}`}</h1>
                <button className='bg-blue-500 px-2 py-1 rounded-lg text-white' onClick={resetButtonClick}>reset</button>
            </div>
            <div>
                <Dropdown
                    options={monthsRange}
                    placeholder="select an option"
                    value={selectedRange}
                    onChange={rangeChangeHandler}
                />
            </div>


            {
                active === 0 && <div className='my-2 mx-5'>
                    <div className='my-3'>
                        <label>Jan</label>
                        <input type='number' className='ml-2 border-2 border-gray-600 rounded-lg px-2' value={firstInput} onChange={(e) => setFirstInput(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <label>Feb</label>
                        <input type='number' className='ml-2 border-2 border-gray-600 rounded-lg px-2' value={secondInput} onChange={(e) => setSecondInput(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <label>March</label>
                        <input type='number' className='ml-2 border-2 border-gray-600 rounded-lg px-2' value={thirdInput} onChange={(e) => setThirdInput(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <label>Aprail</label>
                        <input type='number' className='ml-2 border-2 border-gray-600 rounded-lg px-2' value={fourthInput} onChange={(e) => setFourthInput(e.target.value)} />
                    </div>
                </div>

            }

            {
                active === 1 && <div className='my-2 mx-5'>
                    <div className='my-3'>
                        <label>May</label>
                        <input type='number' className='ml-2 border-2 border-gray-600 rounded-lg px-2' value={fifthInput} onChange={(e) => setFifttInput(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <label>June</label>
                        <input type='number' className='ml-2 border-2 border-gray-600 rounded-lg px-2' value={sixthInput} onChange={(e) => setSixthInput(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <label>July</label>
                        <input type='number' className='ml-2 border-2 border-gray-600 rounded-lg px-2' value={seventhInput} onChange={(e) => setSeventhInput(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <label>Aug</label>
                        <input type='number' className='ml-2 border-2 border-gray-600 rounded-lg px-2' value={eigthInput} onChange={(e) => setEightInput(e.target.value)} />
                    </div>
                </div>

            }

            {
                active === 2 && <div className='my-2 mx-5'>
                    <div className='my-3'>
                        <label>Sept</label>
                        <input type='number' className='ml-2 border-2 border-gray-600 rounded-lg px-2' value={ninthInput} onChange={(e) => setNinthInput(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <label>Oct</label>
                        <input type='number' className='ml-2 border-2 border-gray-600 rounded-lg px-2' value={tenthInput} onChange={(e) => setTenthInput(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <label>Nov</label>
                        <input type='number' className='ml-2 border-2 border-gray-600 rounded-lg px-2' value={elevInput} onChange={(e) => setElevInput(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <label>Dec</label>
                        <input type='number' className='ml-2 border-2 border-gray-600 rounded-lg px-2' value={tweleInput} onChange={(e) => setTweleInput(e.target.value)} />
                    </div>
                </div>

            }

            <button className='bg-green-600 rounded-lg px-3 py-1 ml-[88%] my-2' onClick={calculateClickHandler}>Calculate</button>
        </div>
    )
}

export default YearCard