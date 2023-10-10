function createURL(path) {
  return window.location.origin + path
}

export async function addWorld(name, desc) {
  const res = await fetch(
    new Request(createURL('/api/addworld'), {
      method: 'POST',
      body: JSON.stringify({name: name, desc: desc})
    })
  )
  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}

export async function addRegion(name, desc, type, worldId) {
  const res = await fetch(
    new Request(createURL('/api/addregion'), {
      method: 'POST',
      body: JSON.stringify({name: name, desc: desc, type: type, worldId: worldId})
    })
  )
  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}

