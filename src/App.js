import React, {Component} from 'react';
import List from './components/List';

class App extends Component {
    constructor(){
        super();
        this.state = {
            employees : [
                {
                    id: 1,
                    first_name: "Jessika",
                    last_name: "Kunde",
                    city: "Port Kobeville",
                    state: "Arkansas",
                },
                {
                    id: 2,
                    first_name: "Jessika",
                    last_name: "Kunde",
                    city: "Port Kobeville",
                    state: "Arkansas",
                }
            ]
        }
    }
    render(){
        const { employees } = this.state;
        return (
            <div>
                <h2>Main Page</h2>
                <List employees={employees} />
            </div>
        )
    }
    
}

export default App;