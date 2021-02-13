import React, { Component } from "react";
import ReactDOM from "react-dom";
import { pocetniUrl as u } from "./konstante.js";

export default class FormaZaKupovinu extends Component {
    constructor(props) {
        super(props);
        this.state = { idFilma: this.props.id, cena: this.props.cena };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler() {
        axios.post(u + "karte/kupovina", {
            rezervisano_na: this.state.rezervisano_na,
            cena: this.state.cena * this.state.broj_karata,
            broj_karata: this.state.broj_karata,
            film_id: this.state.idFilma
        });
    }

    render() {
        let cenaKarata = this.state.cena * this.state.broj_karata;
        return (
            <div className="container">
                <form onSubmit={this.submitHandler}>
                    <div className="form-row bg-warning p-2 border">
                        <div className="col-3">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Unesite ime i prezime"
                                onChange={this.changeHandler}
                                name="rezervisano_na"
                            ></input>
                            Rezervacija na ime
                        </div>
                        <div className="col-3">
                            <input
                                className="form-control"
                                type="number"
                                min={1}
                                placeholder="Koliko karata"
                                onChange={this.changeHandler}
                                name="broj_karata"
                            ></input>
                            Broj karata
                        </div>
                        <div className="col-3">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Ovde ce biti izracunata cena"
                                disabled={true}
                                onChange={this.changeHandler}
                                value={cenaKarata || 0}
                                name="cena"
                            ></input>
                            Cena na osnovu unetih parametara
                        </div>

                        <div className="col">
                            <input
                                className="form-control"
                                type="submit"
                                value="Submit"
                            ></input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

if (document.getElementById("formazakupovinu")) {
    ReactDOM.render(
        <FormaZaKupovinu />,
        document.getElementById("formazakupovinu")
    );
}
