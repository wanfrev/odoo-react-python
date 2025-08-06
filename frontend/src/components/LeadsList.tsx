import { useEffect, useState } from "react";
import { fetchLeads } from "../services/api";
import styles from "./LeadsList.module.css";

type Lead = {
  id: number;
  name: string;
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
            <th className={styles.th}>Probability</th>
            <th className={styles.th}>Stage</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className={styles.tr}>
              <td className={styles.td}>{lead.name}</td>
              <td className={styles.td}>
                {lead.probability !== undefined ? (
                  `${lead.probability}%`
                ) : (
                  <span>No Probability</span>
                )}
              </td>
              <td className={styles.td}>
                {Array.isArray(lead.stage_id) && lead.stage_id.length > 1
                  ? lead.stage_id[1]
                  : "No Stage"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
