1. Use Default import to import React
- Don't use this: ```import * as React from "react";```
2. Declare types before runtime implementation
3. Always provide explicit type of children Props
```
import React, {Component} from "react";
// Card.tsx
type Props = {
    children: import('react').ReactNode
}

class Card extends Component<Props> {
    render() {
        const {children} = this.props;
        return <div>{children}</div>;
    }
}
```
4. Use type inference for defining a component state or DefaultProps

```
import React, {Component} from "react";

const initialState = Object.freeze({ count: 0 })
const defaultProps = Object.freeze({name: "John Doe"})

type State = typeof initialState;
type Props = { someProps: string } & typeof defaultProps;

class Counter extends Component<Props, State> {
    static readonly defaultProps = defaultProps;
    readonly state  = {count: 0}
  
    // ...
}
```
5. Use type alias instead of interface for declaring Props/State
```
// works
type State = typeof initialState;
type Props = { someProps: string } & typeof defaultProps;

// throws error
interface State = typeof initialState;
interface Props = { someProps: string } & typeof defaultProps;
```
6. Don’t use method declaration within interface/type alias
```
// Don't do
interface Counter {
  start(count:number) : string
  reset(): void
}
  
// Do
interface Counter {
  start: (count:number) => string
  reset: () => string
}
```
7. Don’t use constructor for class components
8. Don’t use public accessor within classes
9. Don’t use private accessor within Component class
10. Don’t use enum
```
// Don't do this
enum Response {
  Successful,
  Failed,
  Pending
}

function fetchData (status: Response): void => {
    // some code.
}
  
// Do this
type Response = Sucessful | Failed | Pending

function fetchData (status: Response): void => {
    // some code.
}
```