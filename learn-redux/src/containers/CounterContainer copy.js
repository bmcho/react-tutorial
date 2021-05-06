import React from 'react';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual, connect } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';
import { bindActionCreators } from 'redux';

// function CounterContainer({ 
//     number,
//     diff,
//     onIncrease,
//     onDecrease,
//     onSetDiff
// }) {
function CounterContainer({ 
    number,
    diff,
    increase,
    decrease,
    setDiff
}) {
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff
    // }), shallowEqual);
    // const dispatch = useDispatch();

    // const onIncrease = () => dispatch(increase());
    // const onDecrease = () => dispatch(decrease());
    // const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter 
            number={number} 
            diff={diff} 
            onIncrease={increase} 
            onDecrease={decrease} 
            onSetDiff={setDiff}
        />
    )
}

const mapStateToProps = (state) => ({
    number : state.counter.number,
    diff: state.counter.diff
})

// const mapDispatchToProps = dispatch => ({
//     onIncrease: () => dispatch(increase()),
//     onDecrease: () => dispatch(decrease()),
//     onSetDiff: (diff) => dispatch(setDiff(diff))
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//     decrease, increase, setDiff
// }, dispatch);

const mapDispatchToProps = {
    decrease, increase, setDiff
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);