type Props = {
    action?: Function
}
type PropsParsingFunction = (args: any[]) => Props

/*
    Function that add the eventListener of the application
    the returned function must be a cleanup function which destroys the said
    eventListener.
*/
type DispatchFunction = (dispatch: Function, props: Props) => Function
type SubscriptionFunction = (...args: any[]) => [DispatchFunction, Props]