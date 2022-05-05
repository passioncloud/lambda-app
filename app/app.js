exports.myHandler = async (event, ctx) => {
    console.log(`The event is ${event}`)
    console.log(`The context is ${ctx}`)
    return 'SUCCESS HERE'
}