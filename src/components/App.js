import React from "react";
import '../styles/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: "", secondName: "", result: "" };
    }

    setFirstName(e) {
        e.persist();
        this.setState(() => ({ firstName: e.target.value }))

    }

    setSecondName(e) {
        e.persist();
        this.setState(() => ({ secondName: e.target.value }))
    }

    check() {
        let fName = this.state.firstName.toLowerCase().split("");
        let sName = this.state.secondName.toLowerCase().split("");
        fName.forEach((ch, ind) => {
            let x = sName.indexOf(ch);
            if (x != -1) {
                delete fName[ind];
                delete sName[x];
            }
        })
       console.log(fName,sName)
        let l = (fName.join("").length + sName.join("").length) % 6;
        console.log(l);
        if (l == 1) {
            this.setState({ result: "Freinds" })
        }
        else if (l == 2) {
            this.setState({ result: "Love" })

        }
        else if (l == 3) {
            this.setState({ result: "Affection" })

        }
        else if (l == 4) {
            this.setState({ result: "Marriage" })

        }
        else if (l == 5) {
            this.setState({ result: "Enemy" })

        }
        else if (l == 0) {
            this.setState({ result: "Siblings" })

        }

    }

    render() {



        return (
            <div id="main">
                <input placeholder="First Name" onChange={(e) => this.setFirstName(e)}></input>
                <input placeholder="Second Name" onChange={(e) => this.setSecondName(e)}></input>
                <button data-testid="calculate_relationship" onClick={() => this.check()}>Calculate Relationship Future</button>
                <button data-testid="clear">Clear</button><br />
                <h3 data-testid="answer">{this.state.result}</h3>
            </div>
        )
    }
}


export default App;
