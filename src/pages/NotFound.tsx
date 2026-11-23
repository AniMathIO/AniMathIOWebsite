import { Link } from 'react-router-dom'
import { Container, Eyebrow } from '../components/ui'

const NotFound: React.FC = () => (
  <Container className="py-32 text-center">
    <Eyebrow>404</Eyebrow>
    <h1 className="mt-3 text-4xl font-semibold tracking-tight">This page is not on the timeline</h1>
    <p className="mt-4 text-lg text-fg-2">The link may be old, or the page may have moved.</p>
    <Link
      to="/"
      className="btn-primary mt-8 inline-flex min-h-12 items-center justify-center rounded-control px-6"
    >
      Back to the home page
    </Link>
  </Container>
)

export default NotFound
