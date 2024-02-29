import styles from "./addClient.module.css"
import { addClient } from "../lib/actions"

const AddClient = () => {
  return (
    <div>
      <h3>Přidat klienta</h3>

      <div className={styles.container}>
        <form action={addClient} className={styles.form}>
          <input type="text" placeholder="name" name="name" />
          <input type="text" placeholder="address" name="address" />
          
          <div className={styles.numberSection}>
            <input type="text" placeholder="rank" name="rank" />
            <input type="text" placeholder="servis" name="servis" />
            <input type="text" placeholder="zp" name="zp" />
            <input type="text" placeholder="majetek / rok" name="majetek" />
            <input type="text" placeholder="hypo" name="hypo" />
            <input type="number" placeholder="invj" name="invj" />
            <input type="text" placeholder="inv měsíčně" name="invm" />
          </div>

          <div className={styles.notesSection}>
            <textarea name="persons" id="persons" cols="100" rows="3" placeholder="další osoby"></textarea>
            <textarea name="contracts" id="contracts" cols="100" rows="3" placeholder="další smlouvy"></textarea>
          </div>

          <button type="submit" className={styles.button}>
            Přidat
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddClient