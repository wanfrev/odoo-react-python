import { useEffect, useState } from "react"
import { fetchClients } from "../services/api"
import styles from "./ClientsList.module.css"

type Client = {
  id: number
  name: string
  email?: string
  phone?: string | null
  company_id: [number, string] | []
}

export const ClientsList = () => {

  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchClients()
      .then(setClients)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Phone</th>
            <th className={styles.th}>Company</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr className={styles.tr} key={client.id}>
              <td className={styles.td}>{client.name}</td>
              <td className={styles.td}>{client.email || <span className={styles.span}>N/A</span>}</td>
              <td className={styles.td}>{client.phone || <span className={styles.span}>N/A</span>}</td>
              <td className={styles.td}>{Array.isArray(client.company_id) ? client.company_id[1] || <span className={styles.span}>N/A</span> : <span className={styles.span}>N/A</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
