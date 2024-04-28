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
    <div className={styles.section}>
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
        <div className={styles.overview}>
          <p> Poslední servis: <span> {servis}  </span> </p>
          <p>Adresa: <span>{address} </span> </p>
          <p>Rank: <span>{rank}</span></p>
          <br />
          <p> Život: <span> {zp} / {Math.floor(zp * 0.1625)}bj </span></p>
          <p>Neživot: <span>{majetek}</span></p>
          <br />
          <p>Úvěr: <span>{hypo}</span> </p>
          <p>Inv. jednoráz: <span>{invj}</span> </p>
          <p>Inv. pravidelná: <span>{invm}</span> </p>
        </div>
      </div>

      <div className={styles.notesSection}>
        <textarea 
          type="text" 
          placeholder="přidat poznámku..." 
          className={styles.notesInput} 
          rows="5" 
          cols="40"  
       >
       </textarea>
       <button>přidat</button>
      </div>

      <Link href="/kmen" className={styles.backBtn}>
         Zpět
      </Link>
    </div>
  );
};

export default SpecificClient;
