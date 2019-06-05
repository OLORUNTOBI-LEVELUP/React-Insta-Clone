import React from "react";

function withAuthenticate(App){
    return class extends React.Component {
        render(){
            return(<App />);
        }
    }
}

export default withAuthenticate;