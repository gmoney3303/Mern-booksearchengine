import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        createUser(username: $username, email: $email, password: $password){
            token
            user{
                _id
                username
        }
    }
}       
`;

export const SAVE_BOOK = gql`
    mutation saveBook($description: String!, $title: String!){
        saveBook(description: $description, title: $title){
            _id
            username
            email
            savedBooks{
                bookId
                authors
                description
                title
                image
                link
        }
    }
} 
`;

export const REMOVE_BOOK = gql`
    mutation saveBook($bookId: ID!){
        removeBook(bookId: $bookId){
            _id
            username
            savedBooks{
                bookId
                authors
                description
                title
                image
                link
        }
    }
} 
`;