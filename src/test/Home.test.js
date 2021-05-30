import React from 'react'
import { render, screen, act } from '@testing-library/react'
import {mount, configure} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Home from '../components/Home'

configure({ adapter: new Adapter() })

const response = {
    data:
        [
            {
                "userId": 1,
                "id": 1,
                "title": "quidem molestiae enim"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "sunt qui excepturi placeat culpa"
            },
            {
                "userId": 1,
                "id": 3,
                "title": "omnis laborum odio"
            },
            {
                "userId": 1,
                "id": 4,
                "title": "non esse culpa molestiae omnis sed optio"
            },
            {
                "userId": 1,
                "id": 5,
                "title": "eaque aut omnis a"
            },
            {
                "userId": 1,
                "id": 6,
                "title": "natus impedit quibusdam illo est"
            },
            {
                "userId": 1,
                "id": 7,
                "title": "quibusdam autem aliquid et et quia"
            },
            {
                "userId": 1,
                "id": 8,
                "title": "qui fuga est a eum"
            },
            {
                "userId": 1,
                "id": 9,
                "title": "saepe unde necessitatibus rem"
            },
            {
                "userId": 1,
                "id": 10,
                "title": "distinctio laborum qui"
            }
        ]
}

it('renders page title', () => {
    render(<Home />)
    const linkElement = screen.getByText(/Albums/i)
    expect(linkElement).toBeInTheDocument()
})

it('retrieves list of albums',  async() => {
    const apiURL = 'https://jsonplaceholder.typicode.com/users/1/albums'
    const mock = new MockAdapter(axios)
    mock.onGet(apiURL).reply(200, response.data)
    const component = mount(<Home/>)
    await act(() => new Promise((resolve) => {
        setImmediate(() => {
            component.update()
            console.log(component.debug())
            resolve()
        })
    }))
})
