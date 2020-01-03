import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'

const testSchema = `
type Query {
    hi: String
    resolutions: [Resolution]
}
`

// const { ApolloServer, gql} = require('apollo-server') // needs dep download
// const server = new ApolloServer({})

// graphql syntax, not JS
const typeDefs =  [
    testSchema,
    ResolutionsSchema,
]

const resolvers = {
    Query: {
        hi() {
            return "Hello Level Up"
        },
        resolutions() {
            return [
                {
                    _id: "jfkdlsjfkdlfj",
                    name: "Get stuff done!"
                },
                {
                    _id: "fjjjfjfjfjfj",
                    name: "Lose some weight!"
                }
            ]
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema })
