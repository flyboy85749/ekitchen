import Header from './components/Header'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Testimonials from './components/Testimonials'
import AddTestimonialModal from './components/AddTestimonialModal'


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        testimonials: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

const testimonial = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,

})

function App() {
  return (
    <>
    <ApolloProvider client={testimonial}>
    <Header />
    <div className="container">
      <AddTestimonialModal />
      <Testimonials />
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
