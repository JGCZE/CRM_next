import { getOneClient } from "@/app/lib/data"

const SpecificClient = async ({ params }) => {
  const id = params.id
  const oneClient = await getOneClient(id)

  return (
    <div>
          <div key={oneClient.id}>
            <p>{oneClient.name}</p>
            <p>{oneClient.rank}</p>
            <p>{oneClient.servis}</p>
            <p>{oneClient.zp}</p>
            <p>{oneClient.majetek}</p>
            <p>{oneClient.hypo}</p>
            <p>{oneClient.invj}</p>
            <p>{oneClient.invm}</p>
            <p>{oneClient.address}</p>
          </div>
    </div>
  )
}

export default SpecificClient