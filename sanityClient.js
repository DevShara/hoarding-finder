// sanity.js
import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: '11j4bpx0',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const locations = await client.fetch('*[_type == "location"]')
  return locations
}

export async function createPost(location) {
  const result = client.create(location)
  return result
}

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({title})
  return result
}