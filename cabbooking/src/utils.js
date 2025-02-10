
import { config } from "./AdminPortal/Services/config"
export function createUrl(path) {
  return `${config.serverUrl}/${path}`
}
