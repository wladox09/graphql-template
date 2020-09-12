# graphql-template

    Creando una base para un proyecto graphql

## query y mutation de ejemplo

    mutation {
        createAuthor(name: "juan jose") {
            id,
            name
        }
    }

    query {
        authors {
            id,
            name
        }
    }

    mutation {
        createBook(title: "la tatar", author: [
            "7a294acc-781d-49b7-831c-7175192f16f4",
            "63531281-15b0-421f-84e6-925d5e5dc3e5"]) {
            id,
            title,
            author {
                id,
                name
            }
        }
    }

    query {
        books {
            id,
            title,
            author {
                id,
                name
            }
        }
    }
