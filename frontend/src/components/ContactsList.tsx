import { useEffect, useState } from "react";
import { fetchContacts } from "../services/api";
import styles from "./ContactsList.module.css";

type Contact = {
  id: number;
  name: string;
  email?: string;
  phone?: string | null;
  company_id: [number, string] | [];
};

export const ContactsList = () => {

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContacts()
      .then(setContacts)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.th}>
          <tr>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Phone</th>
            <th className={styles.th}>Company</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact) => (
              <tr className={styles.tr} key={contact.id}>
                <td className={styles.td}>{contact.name}</td>
                <td className={styles.td}>{contact.email ?? <span className={styles.span}>No Email</span>}</td>
                <td className={styles.td}>{contact.phone ?? <span className={styles.span}>No Phone</span>}</td>
                <td className={styles.td}>{contact.company_id[1] ?? <span className={styles.span}>No Company</span>}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
