/***
 * globalThis.prisma @ ensures that the prisam clienrt instancve is resuded across hot reloads during development. 
 * qithoutr this each time your application reloads, a new instance of the  prisma client would be created potentially leading to connection issues.
 */

import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = db;
}
