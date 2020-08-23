import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "bootstrap/dist/css/bootstrap.min.css"

import Card from "react-bootstrap/Card"
import book from "../content/book.json"
import Row from "../components/Row"

class IndexPage extends React.Component {
  render() {
    const authorNames = book.authors.map(author => author.name).join(", ")

    return (
      <Layout>
        <SEO title="Home" />
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src={book.coverImage} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.description}</Card.Text>
            <Row label="Author">
              {book.authors.length === 0 ? "No author" : authorNames}
            </Row>
            <Row label="Pages count"> {book.pageCount} pages</Row>
            <Row label="Language">{book.language}</Row>
            <Row label="Progress">{book.progress}%</Row>
            <Row label="Main price">${book.mainPrice}</Row>
            <Row label="Minimum price">${book.minPrice}</Row>
            <Row label="Total sum">${book.totalSum}</Row>
            <Row label="Expected revenue"> ${book.expectedSum}</Row>
            <Row label="Subscribers" delimeter={false}>
              {book.subscribersCount}
            </Row>
            <Link className="btn btn-primary" to="/page-2/" variant="primary">Go to page 2</Link>
          </Card.Body>
        </Card>
         <br />
        <Link className="btn btn-primary" to="/using-typescript/">Go to "Using TypeScript"</Link>
      </Layout>
    )
  }
}

export default IndexPage
