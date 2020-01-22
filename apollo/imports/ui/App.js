import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ResolutionForm from "./ResolutionForm"
import GoalForm from "./GoalForm"
import RegisterForm from '../ui/RegisterForm'
import LoginForm from '../ui/LoginForm'
import { withApollo } from 'react-apollo'


// console.log(Accounts)

const App = ({ loading, resolutions, client, user }) => {
    console.log(resolutions)
    if (loading) return null
    return (
    <div>
        { user._id ? (
            <button onClick={() => {
                Meteor.logout()
                client.resetStore()
            }}>Logout</button>
        ) : (
            <div>
                <RegisterForm client={client}/>
                <LoginForm client={client}/> 
            </div>
        )}
        <ResolutionForm />
        <ul>
            {resolutions.map(resolution => (
                <li key={resolution._id}>
                    {resolution.name}
                    <GoalForm resolutionId={resolution._id} />
                </li>
            ))}
        </ul>
    </div>
    )
}

const resolutionsQuery = gql`
    query Resolutions {
        resolutions {
        _id
        name
    }
    user {
        _id
    }
}
`

export default graphql(resolutionsQuery, {
    props: ({ data }) => ({ ...data })
})(withApollo(App))