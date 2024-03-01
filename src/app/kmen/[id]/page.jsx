import { getOneClient } from "@/app/lib/data";
import Link from "next/link";
import styles from "./oneClient.module.css";
import { deleteClient } from "@/app/lib/actions";
import { handleClick } from "@/app/lib/actions";

const SpecificClient = async ({ params }) => {
  const { id } = params;
  const oneClient = await getOneClient(id)

  const { name, rank, servis, zp, majetek, hypo, invj, invm, address } = oneClient;
  return (
    <div>
      <div key={oneClient.id} className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.name}>{name}</p>
            <button className={styles.editBtn}>
              upravit
            </button>
          <form >
            <button className={styles.deleteBtn}>
              odstranit
            </button>
          </form>
        </div>
        <p>Poslední servis: {servis} </p>
        <p>život: {zp} / {Math.floor(zp * 0.1625)}bj</p>
        <p>{address}</p>
        <p>{rank}</p>
        <p>{majetek}</p>
        <p>{hypo}</p>
        <p>{invj}</p>
        <p>{invm}</p>
      </div>
      <Link href="/kmen" className={styles.backBtn}>
         Zpět
      </Link>
    </div>
  );
};

export default SpecificClient;
