export default (props) => {
  const { min, max } = props
  const sortedNumber = parseInt(Math.random() * (max - min) + 1) + min
  return (
    <div>
      <h1>Aleatory Number</h1>
      <p><strong>Minimum number:</strong>{min}</p>
      <p><strong>Maximum number:</strong>{max}</p>
      <p><strong>Sorted number:</strong>{sortedNumber}</p>
    </div>
  )
}