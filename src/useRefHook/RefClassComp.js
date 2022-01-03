import React from "react";
export default class RefClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.InputRef = React.createRef();
        this.state = { Fname :'' }

    }

    componentDidMount(e) {
        this.InputRef.current.focus();
    }
    Save =(e)=> {
        this.setState({ Fname: e.target.value });
    }

    Show=()=>{
        console.log('  your fname is : '+this.state.Fname);
    }


    render() {
        return (
            <div>
                <input ref={this.InputRef} placeholder="Enter your Name"  onChange={this.Save}/>
                
                <button onClick={this.Show}> save  </button>

                <p > your fname is : { this.state.Fname}</p>
            </div>
        )
    }
}