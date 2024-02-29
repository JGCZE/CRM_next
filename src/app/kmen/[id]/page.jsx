import { getOneClient } from "@/app/lib/data";
import styles from "./oneClient.module.css";

const SpecificClient = async ({ params }) => {
  const id = params.id;
  const oneClient = await getOneClient(id);

  const { name, rank, servis, zp, majetek, hypo, invj, invm, address } = oneClient;
  return (
    <div>
      <div key={oneClient.id} className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.name}>{name}</p>
          <button>upravit</button>
          <button>odstranit</button>
        </div>
        <p>{servis}</p>
        <p>{zp}</p>
        <p>{majetek}</p>
        <p>{hypo}</p>
        <p>{invj}</p>
        <p>{invm}</p>
        <p>{address}</p>
        <p>{rank}</p>
      </div>
    </div>
  );
};

export default SpecificClient;
