// pages/_error.js
function ErrorPage({ statusCode }) {
  // Customize the error message based on the status code
  let errorMessage = "An error occurred"

  if (statusCode === 404) {
    errorMessage = "Page not found"
  }

  return <div>{errorMessage}</div>
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
