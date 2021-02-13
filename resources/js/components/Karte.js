import React, { Component } from "react";
import ReactDOM from "react-dom";
import { pocetniUrl as u } from "./konstante.js";

export default class Karte extends Component {
    constructor(props) {
        super(props);
        this.state = { karte: [], film_id: this.props.id };

        this.fetchKarte();
        this.prikazKarata = this.prikazKarata.bind(this);
        this.adminPanel = this.adminPanel.bind(this);
    }

    fetchKarte() {
        if (this.state.film_id)
            axios
                .get(u + "filmovi/fetch_karata?film_id=" + this.state.film_id)
                .then(res => {
                    const karte = res.data.karte;
                    this.setState({ karte });
                });
        else
            axios.get(u + "karte/fetch").then(res => {
                const karte = res.data.karte;
                this.setState({ karte });
            });
    }

    prikazKarata() {
        let karte = this.state.karte;
        return karte.map(karta => {
            return (
                <div className="row border bg-info">
                    <div className="col">{karta.rezervisano_na}</div>
                    <div className="col">{karta.broj_karata}</div>
                    <div className="col">{karta.cena}</div>
                    {this.adminPanel(karta.id)}
                </div>
            );
        });
    }

    clickHandler(id) {
        axios.delete(u + "karte/izbrisi?id=" + id).then(res => {
            this.setState(state => {
                return { karte: state.karte.filter(k => k.id != id) };
            });
        });
    }

    adminPanel(id) {
        if (!this.state.film_id)
            return (
                <button
                    align="right"
                    onClick={() => this.clickHandler(id)}
                    className="btn btn-danger"
                >
                    Izbrisi
                </button>
            );
    }

    vidiFilmove() {
        if (!this.state.film_id)
            return (
                <a href={u} className="btn btn-block">
                    Vidi sve filmove
                </a>
            );
    }

    render() {
        return (
            <div className="container">
                {this.vidiFilmove()}
                Pregled karata
                <div className="row border">
                    <div className="col">
                        <b>Ime i prezime</b>
                    </div>
                    <div className="col">
                        <b>Broj karata</b>
                    </div>
                    <div className="col">
                        <b>Ukupna cena</b>
                    </div>
                </div>
                {this.prikazKarata()}
            </div>
        );
    }
}

if (document.getElementById("karte")) {
    ReactDOM.render(<Karte />, document.getElementById("karte"));
}
