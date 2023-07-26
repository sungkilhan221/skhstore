import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skAr0dxiSSRazGc3sAwB90RGBgyzPkzqHXU3687jZVSyG3abmcnO9mZVGhfh4WIn16TXYJMWnrF4KVfaCKnQJ3lNw8s5OQ4TlItGc759Xi4AvcTs6MYunivGEc8yNsWnbinum9KaCVXHaEgQOCKgke2cNGqmpKOUnh1ZjrtmX8srvvNKjkYn",
})
