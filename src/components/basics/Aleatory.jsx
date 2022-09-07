export default (props) => {
  const factor = props.max - props.min + 1
  const random = parseInt(Math.random() * factor) + props.min
  return (
    <h1>{random}</h1>
  )
}