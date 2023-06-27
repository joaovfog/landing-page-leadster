import { Card } from "./components";
import { Button, ButtonGroup, CardList, Filter, HorizontalLine, Main, Pagination, Select, Text } from "./styles";

import data from './list.json'

const buttons = [
    { id: 0, title: "Agências" },
    { id: 1, title: "Chatbot" },
    { id: 2, title: "Marketing Digital" },
    { id: 3, title: "Geração de Leads" },
    { id: 4, title: "Mídia Paga" },
]

export default function SecondSection() {
    console.log(data)
    return (
        <Main>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                }}
            >
                <ButtonGroup>
                    {buttons.map((button) => {
                        return (
                            <div key={button.id}>
                                <Button title={button.title} />
                            </div>
                        )
                    })}
                </ButtonGroup>
                <Filter>
                    <Text>Ordenar por</Text>
                    <Select>
                        <option value="0">Data de Publicação</option>
                        <option value="1">Situação</option>
                    </Select>
                </Filter>
            </div>
            <HorizontalLine />
            <CardList>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <Card image={item.image} title={item.title} />
                        </div>
                    )
                })}
            </CardList>
            <HorizontalLine />
            <Pagination>
                <h5 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '.875rem' }}>Página</h5>
                <a
                    href="#"
                    style={{
                        boxSizing: 'border-box',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '.875rem',
                        fontWeight: '600',
                        padding: '.25rem 0.6rem',
                        borderRadius: '0.2rem',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                    1
                </a>
                <a 
                    href="#"
                    style={{
                        boxSizing: 'border-box',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '.875rem',
                        fontWeight: '600',
                        padding: '.25rem 0.6rem',
                        borderRadius: '0.2rem',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        color: 'black'
                    }}
                >
                    2
                </a>
                <a 
                    href="#"
                    style={{
                        border: '1px solid #007dff',
                        boxSizing: 'border-box',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '.875rem',
                        fontWeight: '600',
                        padding: '.25rem 0.6rem',
                        borderRadius: '0.2rem',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        color: '#007dff',
                        background: '#fff'
                    }}
                >
                    3
                </a>
                <a 
                    href="#"
                    style={{
                        boxSizing: 'border-box',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '.875rem',
                        fontWeight: '600',
                        padding: '.25rem 0.6rem',
                        borderRadius: '0.2rem',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        color: 'black'
                    }}
                >
                    4
                </a>
            </Pagination>
        </Main>
    )
}