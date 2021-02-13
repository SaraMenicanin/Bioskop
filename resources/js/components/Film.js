import React, { Component } from "react";
import ReactDOM from "react-dom";
import Karte from "./Karte";
import FormaZaKupovinu from "./FormaZaKupovinu";
export default class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: this.props.film,
            forma: this.props.skupi,
            karte: this.props.skupi
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.skupi !== this.props.skupi) {
            this.setState({ forma: this.props.skupi, karte: this.props.skupi });
        }
    }

    timeFormat(time) {
        let datum = new Date(time);

        let dani = datum.getDate();
        let meseci = datum.getMonth() + 1;
        let godina = datum.getFullYear();

        return dani + "." + meseci + "." + godina;
    }

    formaZaKupovinu() {
        if (this.state.forma) {
            return (
                <FormaZaKupovinu
                    key={this.state.film.id * 10}
                    id={this.state.film.id}
                    cena={this.state.film.cena}
                />
            );
        }
    }

    prikazKarata() {
        if (this.state.karte) {
            return (
                <Karte key={this.state.film.id * 100} id={this.state.film.id} />
            );
        }
    }
    karte() {
        this.setState({ karte: !this.state.karte });
    }
    forma() {
        this.setState({ forma: !this.state.forma });
    }

    render() {
        return (
            <div className="row bg-warning p-4 border">
                <div className="col-3">{this.state.film.naziv}</div>
                <div className="col-2">{this.state.film.sala}</div>
                <div className="col">
                    {this.timeFormat(this.state.film.datum_odrzavanja)}
                </div>
                <div className="col">
                    {this.state.film.max_karata -
                        this.state.film.kupljene_karte}
                </div>
                <div className="col-1">{this.state.film.cena}</div>
                <div className="col">
                    <button
                        onClick={this.karte.bind(this)}
                        className="btn btn-block btn-primary "
                    >
                        Pregled karata
                    </button>

                    <button
                        onClick={this.forma.bind(this)}
                        className="btn btn-block btn-success"
                    >
                        Kupi kartu
                    </button>
                </div>
                {this.prikazKarata()}
                {this.formaZaKupovinu()}
            </div>
        );
    }
}

if (document.getElementById("film")) {
    ReactDOM.render(<Film />, document.getElementById("film"));
}
