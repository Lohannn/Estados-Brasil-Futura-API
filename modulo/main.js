/*********************************************************************************
 * Autor: Lohannes
 * Data: 03/03/2023
 * Objetivo: Criar um Back-End para no futuro integrar em uma API que terá como 
 * objetivo trazer informações sobre os estados do Brasil.
 * Versão: 1.0
**********************************************************************************/

var estadosBrasil = require('../JSON/estados_cidades.js')

const getListaDeEstados = function () {

    let listaEstadosJSON = {}
    let listaEstadosArray = []

    estadosBrasil.estadosCidades.estados.forEach(function (estado) {
        listaEstadosArray.push(estado.sigla)
    })

    listaEstadosJSON.uf = listaEstadosArray;
    listaEstadosJSON.quantidade = listaEstadosArray.length;

    return listaEstadosJSON

}

const getDadosEstado = function (siglaDoEstado) {

    let siglaEstado = siglaDoEstado.toUpperCase();
    let listaDadosJSON = false;

    if (regiao === '') {
        listaRegiaoJSON = false;
    } else if (!isNaN(regiao)) {
        listaRegiaoJSON = false;
    } else {
        estadosBrasil.estadosCidades.estados.forEach(function (estado) {
            if (estado.sigla == siglaEstado) {
                listaDadosJSON = {};

                listaDadosJSON.uf = estado.sigla;
                listaDadosJSON.descricao = estado.nome;
                listaDadosJSON.capital = estado.capital;
                listaDadosJSON.regiao = estado.regiao;

            }

        })
    }

    return listaDadosJSON;

}

const getCapitalEstado = function (siglaDoEstado) {

    let siglaEstado = siglaDoEstado.toUpperCase();
    let listaCapitalJSON = false;

    if (regiao === '') {
        listaRegiaoJSON = false;
    } else if (!isNaN(regiao)) {
        listaRegiaoJSON = false;
    } else {
        estadosBrasil.estadosCidades.estados.forEach(function (estado) {
            if (estado.sigla == siglaEstado) {
                listaCapitalJSON = {};

                listaCapitalJSON.uf = estado.sigla;
                listaCapitalJSON.descricao = estado.nome;
                listaCapitalJSON.capital = estado.capital;
            }

        })
    }

    return listaCapitalJSON;

}

const getEstadosRegiao = function (regiaoDoBrasil) {

    let primeiraLetra = regiaoDoBrasil.charAt(0).toUpperCase();
    let restoDaPalavra = regiaoDoBrasil.slice(1).toLowerCase();
    let regiao = primeiraLetra + restoDaPalavra;
    let listaRegiaoJSON;
    let listaEstadosArray = []

    if (regiao === '') {
        listaRegiaoJSON = false;
    } else if (!isNaN(regiao)) {
        listaRegiaoJSON = false;
    } else {
        estadosBrasil.estadosCidades.estados.forEach(function (estado) {
            if (estado.regiao == regiao) {
                let estadoRecolhido = {}

                estadoRecolhido.uf = estado.sigla
                estadoRecolhido.descricao = estado.nome
                listaEstadosArray.push(estadoRecolhido)

            }
        })

        if (listaEstadosArray.length != 0) {
            listaRegiaoJSON = {}

            listaRegiaoJSON.regiao = regiao;
            listaRegiaoJSON.estados = listaEstadosArray;
        } else {
            listaRegiaoJSON = false;
        }

    }

    return listaRegiaoJSON;

}

const getCapitalPais = function () {

    let listaCapitaisBrJSON;
    let listaCapitaisArray = []

    estadosBrasil.estadosCidades.estados.forEach(function (estado) {
        if (estado.capital_pais != undefined) {
            let estadoRecolhido = {}

            estadoRecolhido.capital_atual = estado.capital_pais.capital
            estadoRecolhido.uf = estado.sigla
            estadoRecolhido.descricao = estado.nome
            estadoRecolhido.capital = estado.capital
            estadoRecolhido.regiao = estado.regiao
            estadoRecolhido.capital_pais_ano_inicio = estado.capital_pais.ano_inicio
            estadoRecolhido.capital_pais_ano_termino = estado.capital_pais.ano_fim

            listaCapitaisArray.push(estadoRecolhido)
        }

    })

    listaCapitaisBrJSON = {}
    listaCapitaisBrJSON.capitais = listaCapitaisArray

    return listaCapitaisBrJSON

}

const getCidades = function (siglaDoEstado) {

    let siglaEstado = siglaDoEstado.toUpperCase();
    let listaCidadesJSON;
    let listaCidadesArray = []


    if (siglaEstado === '') {
        listaCidadesJSON = false;
    } else if (!isNaN(siglaEstado)) {
        listaCidadesJSON = false;
    } else {
        estadosBrasil.estadosCidades.estados.forEach(function (estado) {
            if (estado.sigla == siglaEstado) {
                listaCidadesJSON = {};

                listaCidadesJSON.uf = estado.sigla;
                listaCidadesJSON.descricao = estado.nome
                listaCidadesJSON.quantidade_cidades = estado.cidades.length;

                estado.cidades.forEach(function (cidade) {
                    listaCidadesArray.push(cidade.nome)
                })

                listaCidadesJSON.cidades = listaCidadesArray

            }

        })
    }

    return listaCidadesJSON

}