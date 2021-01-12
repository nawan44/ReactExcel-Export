import React from 'react';
// import io from 'socket.io-client'
// import url from 'config';

class GetUser extends React.Component {
    // const socket = io.connect("http")
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => this.setState({ items: data }))
    }


    // componentDidMount() {
    //     fetch("http://172.16.2.142:4000/api/product/form-data")
    //         .then(response => response.json())
    //         .then(data => this.setState({ items: data }))
    // }

    render() {
        const { items } = this.state
        return (
            <div>
                Get USer
                <div>
                    <ul>
                        {items.map((otem, index) =>

                            <li key={index}>{otem.name}</li>)}
                    </ul>
                </div>
                {/* <div>
                    <ul>
                        {items.map((otem, index) =>

                            <li key={index}>{otem.barcode}</li>)}
                    </ul>
                </div> */}
            </div>
        )
    }
}
export default GetUser;