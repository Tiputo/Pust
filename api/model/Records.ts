import { SchemaDefinition as def } from '@contember/schema-definition'
import { User } from "./User"

export class Records {
    user = def.manyHasOne(User, "records").cascadeOnDelete()
    lastIn = def.dateTimeColumn().default('now')
    yes = def.stringColumn().notNull()
    almost = def.stringColumn().notNull()
    no = def.stringColumn().notNull()
}
