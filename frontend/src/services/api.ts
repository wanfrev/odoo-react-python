const API_URL = 'http://localhost:8000';

export async function fetchContacts() {
  const res = await fetch(`${API_URL}/crm/contacts`);
  if (!res.ok) throw new Error('Error al obtener contacts');
  return res.json();
}

export async function fetchLeads() {
  const res = await fetch(`${API_URL}/crm/leads`);
  if (!res.ok) throw new Error('Error al obtener leads');
  return res.json();
}

export async function fetchClients(){
  const res = await fetch(`${API_URL}/crm/clients`);
  if (!res.ok) throw new Error('Error al obtener clients');
  return res.json();
}