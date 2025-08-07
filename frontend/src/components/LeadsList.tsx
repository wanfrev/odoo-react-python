import { useEffect, useState } from "react";
import { fetchLeads } from "../services/api";
import styles from "./LeadsList.module.css";

type Lead = {
  id: number;
  name: string;
  company_id: [number, string] | [];
  partner_id: [number, string] | [];
  email_from: string;
  phone: string;
  expected_revenue: number;
  probability?: number;
  stage_id: [number, string] | [];
};

export const LeadsList = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads()
      .then(setLeads)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.th}>
          <tr>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Company</th>
            <th className={styles.th}>Contact</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Phone</th>
            <th className={styles.th}>Expected Revenue</th>
            <th className={styles.th}>Probability</th>
            <th className={styles.th}>Stage</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className={styles.tr}>
              <td className={styles.td}>{lead.name}</td>
              <td className={styles.td}>
                {Array.isArray(lead.company_id) && lead.company_id.length > 1
                  ? lead.company_id[1]
                  : <span className={styles.span}>No Company</span>}
              </td>
              <td className={styles.td}>
                {Array.isArray(lead.partner_id) && lead.partner_id.length > 1
                  ? lead.partner_id[1]
                  : <span className={styles.span}>No Contact</span>}
              </td>
              <td className={styles.td}>{lead.email_from || <span className={styles.span}>No Email</span>}</td>
              <td className={styles.td}>{lead.phone || <span className={styles.span}>No Phone</span>}</td>
              <td className={styles.td}>{lead.expected_revenue !== undefined ? `$${lead.expected_revenue}` : <span className={styles.span}>No Revenue</span>}</td>
              <td className={styles.td}>
                {lead.probability !== undefined ? (
                  `${lead.probability}%`
                ) : (
                  <span className={styles.span}>No Probability</span>
                )}
              </td>
              <td className={styles.td}>
                {Array.isArray(lead.stage_id) && lead.stage_id.length > 1
                  ? lead.stage_id[1]
                  : <span className={styles.span}>No Stage</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
