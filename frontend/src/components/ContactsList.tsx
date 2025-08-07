import { useEffect, useState } from "react";
import { fetchContacts } from "../services/api";
import styles from "./ContactsList.module.css";

type Contact = {
  id: number;
  name: string;
  email?: string | null;
  phone?: string | null;
  company_id: [number, string] | [];
  company_name?: string | null;
  country_id: [number, string] | [];
  city?: string;
  vat?: string;
  website?: string | null;
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
            <th className={styles.th}>Country</th>
            <th className={styles.th}>City</th>
            <th className={styles.th}>Website</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr className={styles.tr} key={contact.id}>
              <td className={styles.td}>{contact.name}</td>
              <td className={styles.td}>{contact.email || <span className={styles.span}>No Email</span>}</td>
              <td className={styles.td}>{contact.phone || <span className={styles.span}>No Phone</span>}</td>
              <td className={styles.td}>
                {Array.isArray(contact.company_id) && contact.company_id.length > 1
                  ? contact.company_id[1]
                  : (contact.company_name || <span className={styles.span}>No Company</span>)}
              </td>
              <td className={styles.td}>
                {Array.isArray(contact.country_id) && contact.country_id.length > 1
                  ? contact.country_id[1]
                  : <span className={styles.span}>No Country</span>}
              </td>
              <td className={styles.td}>{contact.city || <span className={styles.span}>No City</span>}</td>
              <td className={styles.td}>
                {contact.website ? (
                  <a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a>
                ) : (
                  <span className={styles.span}>No Website</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
