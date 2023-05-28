import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`

const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #9be1fb;
    border-radius: 5px;
    border: none;
    width: 16vw;
    height: 16vh;
    color: #000000;

    a {
        text-decoration: none;
        color: #000000;
    }

    h4 {
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        margin: auto;
    }
    p {
        color: #7c7c8a;
        font-size: 12px;
        text-align: center;
    }
`

interface Repository {
    name: string,
    url: string,
    createdAt: string
}

interface Props {
    icon?: string,
    icon_alt?: string
}

const PinnedRepo: React.FC<Props> = ({ icon, icon_alt }) => { 
    const [repo, setRepo] = useState<Repository[]>([]);
    
    const fetchPinnedRepos = async () => {
        try {
            const response = await axios.post('https://api.github.com/graphql', {
                query: `
                    query {
                    viewer {
                        pinnedItems(first: 5, types: REPOSITORY) {
                        edges {
                            node {
                            ... on Repository {
                                name
                                url
                                createdAt
                            }
                            }
                        }
                        }
                    }
                }
              `
            },
            {headers: {
                Authorization: 'Bearer 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'
            }});
            const pinnedRepos = response.data.data.viewer.pinnedItems.edges.map((edge: any) => edge.node)
            setRepo(pinnedRepos)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchPinnedRepos()
    }, [])

    return(
        <section style={{color: 'white'}}>
            <List>
                {repo.map((item) => {
                    return (
                        <Item key={item.name}>
                            <img src={icon} alt={icon_alt} />
                            <a href={item.url}>
                                <h4>{item.name}</h4>
                            </a>
                            <p>Clique no nome do projeto para ser direcionado ao repositório</p>
                            Criado em: {new Date(item.createdAt).toLocaleDateString()}
                        </Item>
                    )
                })}
            </List>
        </section>
    )
}

export default PinnedRepo;