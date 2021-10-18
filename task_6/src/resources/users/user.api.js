export async function getUsers(url) {
  const res = await fetch(url)
  const data = await res.json()
  return data.data;
}
