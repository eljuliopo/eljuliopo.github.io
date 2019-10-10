import React from 'react'
import { StaticQuery, navigate, graphql, Link } from 'gatsby'
import { Grid, Header, Image, Segment, List } from 'semantic-ui-react'
import Logos from '../components/gallery/Logos'
import Layout from '../components/layout'



const Portfolio = ({ mobile }) => (
  <StaticQuery
    query={graphql`
      query PortfolioQuery {
        allContentfulBook {
          edges {
            node {
              id
              title
              image {
                fixed(width: 400) {
                  src
                  width
                  height

                }
              }
              category
            }
          }
        }
      }
    `}

    render={data => (
    <Layout>
      <p className="align-left"><a href="/"><span className="icon fa-home"> Inicio </span></a></p>
      <Segment inverted vertical>

      <h3 className="align-center"><span className="icon fa-book"> </span>Portafolio de trabajos</h3>
      <h4 className="align-center">JULIO DÍAZ PÉREZ</h4>

        <Grid centered columns={4}>
          {data.allContentfulBook.edges.map(({ node }) => {
            return (

              <Grid.Column key={node.id} mobile={8} tablet={6} computer={4}>
                <List.Item key={node.id} align='left'>
                  <Image
                      fluid
                      rounded
                      src={node.image.fixed.src}
                      alt={node.id} />

                    <Header inverted>
                      {node.title}
                      <Header.Subheader as='h6'>{node.category}</Header.Subheader>
                    </Header>
                </List.Item>
              </Grid.Column>
            )
          })}
        </Grid>
        {console.log(mobile)}
      </Segment>
      </Layout>
    )}
  />
)

export default Portfolio
