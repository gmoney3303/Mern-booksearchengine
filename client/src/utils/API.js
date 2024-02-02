import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from './queries'; // Define your GraphQL queries

// Get logged-in user's info
export const getMe = () => {
  return useQuery(GET_ME);
};

// Create user
export const createUser = (userData) => {
  // Use useMutation hook to execute the addUser mutation
  const [addUser] = useMutation(ADD_USER); // Define your GraphQL mutation for adding a user

  // Call the mutation with userData
  return addUser({
    variables: userData,
  });
};

// Login user
export const loginUser = (userData) => {
  // Use useMutation hook to execute the loginUser mutation
  const [loginUser] = useMutation(LOGIN_USER); // Define your GraphQL mutation for login

  // Call the mutation with userData
  return loginUser({
    variables: userData,
  });
};

// Save book for a logged-in user
export const saveBook = (bookData) => {
  // Use useMutation hook to execute the saveBook mutation
  const [saveBook] = useMutation(SAVE_BOOK); // Define your GraphQL mutation for saving a book

  // Call the mutation with bookData
  return saveBook({
    variables: bookData,
  });
};

// Remove saved book for a logged-in user
export const deleteBook = (bookId) => {
  // Use useMutation hook to execute the removeBook mutation
  const [removeBook] = useMutation(REMOVE_BOOK); // Define your GraphQL mutation for removing a book

  // Call the mutation with bookId
  return removeBook({
    variables: { bookId },
  });
};

// Make a search to Google Books API
export const searchGoogleBooks = (query) => {
  // Use useQuery hook to execute the searchBooks query
  const { loading, error, data } = useQuery(SEARCH_BOOKS, {
    variables: { query },
  });

  return { loading, error, data };
};