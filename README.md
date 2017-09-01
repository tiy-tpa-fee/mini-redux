# Understanding Props vs State

```JavaScript
<Multiply a="4" b="2" />  // => 8
```

```JavaScript
const multiply = (a, b) => {  // <-- Props
  const product = a * b       // <-- State
  return product
}
```

```JavaScript
<Square n="4" />     // ==> 16
```

```JavaScript
class Square extends Component {

   render () {
      return <Multiply a={this.props.n} b={this.props.n} />
   }
}
```

```JavaScript
const square = (n) => {          // <-=  props
  const product = multiply(n, n) // <-- state
  return product
}
```

```JavaScript
// multiply(4, 2)  // => 8
```

> Props are just like parameters/arguments to a function
> State is like internal variables scoped to a function
