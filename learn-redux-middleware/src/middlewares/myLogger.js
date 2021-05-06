const myLogger = store => next => action => {
    console.log(action);
    console.log('\ta', store.getState());
    const result = next(action);
    console.log('\tb', store.getState());
    return result;
};

export default myLogger;