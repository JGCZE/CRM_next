import { getOneClient } from "@/app/lib/data"

const SpecificClient = async ({ params }) => {
  const id = params.id
  const oneClient = await getOneClient(id)

  const { name, rank, servis, zp, majetek, hypo, invj, invm, address } = oneClient
  return (
    <div>
          <div key={oneClient.id}>
            <p>{name}</p>
            <p>{rank}</p>
            <p>{servis}</p>
            <p>{zp}</p>
            <p>{majetek}</p>
            <p>{hypo}</p>
            <p>{invj}</p>
            <p>{invm}</p>
            <p>{address}</p>
          </div>
    </div>
  )
}

export default SpecificClient