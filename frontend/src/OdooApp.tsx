import { TabsPage } from "./pages/TabsPage"
import styles from "./OdooApp.module.css"

function OdooApp() {
  return (
    <div>
      <h1 className={styles.title}>Odoo App</h1>
      <TabsPage />
    </div>
  )
}

export default OdooApp
