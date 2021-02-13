import React, { Component } from "react";
import ReactDOM from "react-dom";
import Film from "./Film";
import { pocetniUrl as u } from "./konstante.js";

export default class Filmovi extends Component {
    constructor(props) {
        super(props);
        this.state = { filmovi: [], skupi: false };

        this.fetchFilmova();
        this.skupi = this.skupi.bind(this);
    }

    fetchFilmova() {
        axios.get(u + "filmovi/fetch").then(res => {
            const filmovi = res.data.filmovi;
            this.setState({ filmovi });
        });
    }

    prikazFilmova() {
        return this.state.filmovi.map(film => {
            return <Film key={film.id} skupi={this.state.skupi} film={film} />;
        });
    }

    skupi() {
        this.setState({ skupi: !this.state.skupi });
        console.log(this.state.skupi);
    }

    render() {
        return (
            <div className="container">
                <a href={u + "karte"} className="btn btn-block">
                    Vidi sve karte
                </a>
                <div className="row bg-info p-4 ">
                    <div className="col-3">
                        <b>Naziv</b>
                    </div>
                    <div className="col-2">
                        <b>Sala</b>
                    </div>
                    <div className="col">
                        <b>Datum</b>
                    </div>
                    <div className="col">
                        <b>Ostalo karata</b>
                    </div>
                    <div className="col-1">
                        <b>Cena</b>
                    </div>
                    <div className="col">
                        <button onClick={this.skupi} className="btn">
                            Skupi
                        </button>
                    </div>
                </div>

                {this.prikazFilmova()}
            </div>
        );
    }
}

if (document.getElementById("filmovi")) {
    ReactDOM.render(<Filmovi />, document.getElementById("filmovi"));
}
