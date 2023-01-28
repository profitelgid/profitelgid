export const load = ({ fetch, params }) => {
    const fetchItem = async (slug) => {
        const res = await fetch('https://apps.crewnew.com/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                query CategoryProducts {
                    products_categories_by_pk(id: 12) {
                      products(order_by: {sort: asc, selling_price: asc}) {
                        title
                        selling_price
                        colors
                        image
                      }
                      products_category {
                        name
                        products_categories(order_by: {sort: asc}) {
                          name
                          slug
                        }
                      }
                      name
                      title
                      coating_material
                      description
                      description_short
                      image
                      title_tag
                      title_og
                      parent_id
                      meta_description
                      keywords
                      image_og
                      description_og
                      products_categories_files {
                        directus_file {
                          filename_disk
                          title
                        }
                      }
                    }
                  }
                  `
            }) // close JSON.stringify() and query
        }); //// close GQL and fetch
        const data = await res.json()
        return data
    }

    return {
        item: fetchItem(params.slug)
    }
}