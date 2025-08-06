
import { useState } from "react";
import { ClientsList } from "../components/ClientsList";
import { ContactsList } from "../components/ContactsList";
import { LeadsList } from "../components/LeadsList";
import styles from "./TabsPage.module.css";

const TABS = [
  { label: "Contacts", component: <ContactsList /> },
  { label: "Leads", component: <LeadsList /> },
  { label: "Clients", component: <ClientsList /> },
];

export const TabsPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className={styles.tabsBar}>
        {TABS.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={
              activeTab === idx
                ? `${styles.tabButton} ${styles.tabButtonActive}`
                : styles.tabButton
            }
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{TABS[activeTab].component}</div>
    </div>
  );
};
