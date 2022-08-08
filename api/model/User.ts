import { SchemaDefinition as def } from '@contember/schema-definition'
import { Records } from "./Records"

export class User {
    firstname = def.stringColumn().notNull()
    surname = def.stringColumn().notNull()
    nickname = def.stringColumn()
    records = def.oneHasMany(Records, "user")
}