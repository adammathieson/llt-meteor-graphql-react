import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'
import ResolutionResolvers from '../../api/resolutions/resolvers'
import UsersResolvers from '../../api/users/resolvers'
import UsersSchema from '../../api/users/User.graphql'
// hi
const testSchema = `
type Query {
    hi: String
    resolutions: [Resolution]
    user: User 
}
`

// const { ApolloServer, gql} = require('apollo-server') // needs dep download
// const server = new ApolloServer({})

const typeDefs =  [
    testSchema,
    ResolutionsSchema,
    UsersSchema,
]

const testResolvers = {
    Query: {
        hi() {
            return "Hello Level Up";
        }
    }
}

const resolvers = merge(
    testResolvers,
    ResolutionResolvers,
    UsersResolvers,
)

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema })
