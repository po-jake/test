import { Book } from '../../app/core/models/book.model'

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    year: 2008,
    description: 'A handbook of agile software craftsmanship focusing on writing readable, maintainable, and efficient code.'
  },
  {
    id: 2,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    year: 1999,
    description: 'Practical advice and best practices for software developers to improve their craftsmanship and problem-solving skills.'
  },
  {
    id: 3,
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    year: 2009,
    description: 'Comprehensive textbook covering a broad range of algorithms in depth, suitable for students and professionals.'
  },
  {
    id: 4,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    year: 2009,
    description: 'A deep dive into the core mechanisms of JavaScript, helping developers truly understand the language.'
  },
  {
    id: 5,
    title: 'Design Patterns',
    author: 'Erich Gamma',
    year: 1994,
    description: 'Classic guide presenting common object-oriented design patterns to solve recurring design problems.'
  }
];
