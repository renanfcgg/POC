import React from "react";
import Card from "./card";


class Cards extends React.Component {


    render() {

        return (
            <>
                <div className="flex gap-4">
                    {this.props.clients.map((client, key) => {
                        return (
                            <Card client={client} key={key} />
                        ) 
                    })}
                </div>
            </>
        )


    }
};

export default Cards







