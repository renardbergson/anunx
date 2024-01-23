export async function getServerSideProps() {
  // Fetch data from an API
  const response = await fetch('http://localhost:8080/products/getAds/65ad392220ea77564cdb4ebb')
  const data = await response.json()

  // Return the data as props
  return {
    props: { data }
  }
}