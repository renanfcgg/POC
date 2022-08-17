import React from "react";


class Cards extends React.Component {


    render() {

        return (
            <>
                <div className="flex gap-4">
                    {this.props.clients.map(client => {

                        return (
                            <div className="p-0 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-12 bg-teal-400 w-80 h-40 relative">
                                    <figure className="flex justify-center">
                                        <img src={client.image} className="rounded-full w-40 h-40 object-cover absolute inset-x-auto top-6 border-4 border-b-teal-400"></img>
                                    </figure>

                                </div>
                                <div className="px-6 py-10">
                                    <h2 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">{client.name}</h2>
                                    <p className="mb-3 font-normal text-center text-gray-500 dark:text-gray-400">{client.office}</p>
                                    <div className="flex justify-center gap-2">
                                        <button className="bg-blue-500 hover:bg-blue-700 hover:underline text-white font-bold py-2 px-4 rounded" href={`tel:+${client.phone}`}>
                                            Telefone
                                        </button>
                                        <button className="bg-blue-500 hover:bg-blue-700 hover:underline text-white font-bold py-2 px-4 rounded" href={`mailto:${client.email}`}>
                                            Email
                                        </button>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </>
        )


    }
};

export default Cards







