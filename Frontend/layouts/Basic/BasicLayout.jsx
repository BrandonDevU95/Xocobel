import {Container} from 'semantic-ui-react'

export default function Basic({children}) {
    return (
        <Container className='basic-layout'>
            <h1>Basic Layout</h1>
            {children}
        </Container>
    )
}
