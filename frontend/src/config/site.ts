// One place for the details that change often. Edit src/config/site.json (it is also read by the build script).
import raw from "./site.json";

export const site = {
  url: raw.url,
  name: raw.name,
  email: raw.email,
  auditPrice: raw.auditPrice,
  auditTurnaround: raw.auditTurnaround,
  sprintFrom: raw.sprintFrom,
  foundingDate: raw.foundingDate,
  linkedin: raw.linkedin,
  logoBase: raw.logoBase,
  policiesUpdated: raw.policiesUpdated,
};
