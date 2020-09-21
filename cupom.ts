let dados = {
  nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
  logradouro: "Av. Projetada Leste",
  numero: 500,
  complemento: "EUC F32/33/34",
  bairro: "Br. Sta Genebra",
  municipio: "Campinas",
  estado: "SP",
  cep: "13080-395",
  telefone: "(19) 3756-7408",
  observacao: "Loja 1317 (PDP)",
  cnpj: "42.591.651/0797-34",
  inscricao_estadual: "244.898.500.113"
};

function imprime_dados_loja() {
  // Implemente aqui
 if (!dados.nome_loja){
    return "O campo nome da loja é obrigatório";
  }

  if(!dados.logradouro){
    return "O campo logradouro do endereço é obrigatório";
  }

const _logradouro : string = dados.logradouro + ", ";

const _numero : string = dados.numero ? `${dados.numero}` : "s/n"

const _complemento : string = dados.complemento && " " + dados.complemento || "";

const _bairro : string = dados.bairro && dados.bairro + " - " || "";

 if (!dados.municipio){
    return "O campo município do endereço é obrigatório";

}

const _municipio : string = dados.municipio + " - ";

if (!dados.estado){
    return "O campo estado do endereço é obrigatório";
 }

const _cep : string = dados.cep && "CEP:" + dados.cep || "";

const _telefone : string = dados.telefone && " Tel " + dados.telefone || "";


if (!dados.cnpj){
    return "O campo CNPJ da loja é obrigatório";
 }

const _cnpj : string = "CNPJ: " + dados.cnpj;
 
if (!dados.inscricao_estadual){
    return "O campo inscrição estadual da loja é obrigatório";
 }

const _inscricao_estadual : string = "IE: " + dados.inscricao_estadual;


  return `${dados.nome_loja}
${_logradouro}${_numero}${_complemento}
${_bairro}${_municipio}${dados.estado}
${_cep}${_telefone}
${dados.observacao}
${_cnpj}
${_inscricao_estadual}
`;
}

module.exports = {
  dados: dados,
  imprime_dados_loja:  imprime_dados_loja
};