import NumberTicker from "./magicui/NumberTicker";
import PropTypes from 'prop-types'



export default function NumberTrickerDemo({ valueNum, desc }) {
    return (
        <div className="space-y-1 mx-auto lg:mx-0">
            <p className="text-3xl lg:text-5xl font-medium text-cyan-500">
                <NumberTicker value={valueNum} /> +
            </p>
            <p className="text-base lg:text-xl font-medium text-slate-500">{desc}</p>
        </div>

    )
}

NumberTrickerDemo.propTypes = {
    valueNum: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired
};



