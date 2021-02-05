const produtos = [
  {
    id_produto: 1,
    categoria: "croche",
    descricao: "Biquinis Cores: Preto e Magenta",
    preco: 149.9,
    preco_venda: 119.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 2,
    categoria: "croche",
    descricao: "Biquinis Cores: Branco/Preto",
    preco: 299.99,
    preco_venda: 229,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 3,
    categoria: "croche",
    descricao: "Biquinis Cores: Branco/Preto",
    preco: 199.99,
    preco_venda: 149.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 4,
    categoria: "croche",
    descricao: "Biquinis Cores: Branco/Preto",
    preco: 199.99,
    preco_venda: 149.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 5,
    categoria: "croche",
    descricao: "Biquinis Cores: Branco/Preto",
    preco: 149.99,
    preco_venda: 119.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 6,
    categoria: "croche",
    descricao: "Biquinis Cores: Amarelo",
    preco: 149.99,
    preco_venda: 99.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 7,
    categoria: "croche",
    descricao: "Biquinis Cores: Amarelo",
    preco: 99.99,
    preco_venda: 89.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 8,
    categoria: "croche",
    descricao: "Biquinis Cores: Amarelo",
    preco: 129.9,
    preco_venda: 89.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 9,
    categoria: "croche",
    descricao: "Biquinis Cores: Verde Oliva",
    preco: 149.9,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 10,
    categoria: "croche",
    descricao: "Biquinis Cores: Verde Oliva",
    preco: 149.9,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 11,
    categoria: "croche",
    descricao: "Biquinis Cores: Verde Oliva",
    preco: 299.9,
    preco_venda: 199.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 12,
    categoria: "cinturaAlta",
    descricao: "Biquinis Cores: Laranja e Rosa",
    preco: 199.99,
    preco_venda: 179.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 13,
    categoria: "cinturaAlta",
    descricao: "Biquinis Cores: Laranja e Rosa",
    preco: 190.9,
    preco_venda: 179.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 14,
    categoria: "cinturaAlta",
    descricao: "Biquinis Cores: Laranja e Rosa",
    preco: 149.9,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 15,
    categoria: "cinturaAlta",
    descricao: "Biquinis Cores: Azul Turquesa",
    preco: 199.99,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 16,
    categoria: "cinturaAlta",
    descricao: "Biquinis Cores: Azul Turquesa",
    preco: 169.9,
    preco_venda: 114.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 17,
    categoria: "cinturaAlta",
    descricao: "Biquinis Cores: Azul Turquesa",
    preco: 159.9,
    preco_venda: 114.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 18,
    categoria: "cinturaAlta",
    descricao: "Biquinis Cores: Azul Turquesa",
    preco: 249.9,
    preco_venda: 229.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 19,
    categoria: "cinturaAlta",
    descricao: "Biquinis Cores: A.I Aqua",
    preco: 249.9,
    preco_venda: 229.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 20,
    categoria: "cinturaAlta",
    descricao: "Biquinis Cores: A.I Aqua",
    preco: 249.9,
    preco_venda: 229.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 21,
    categoria: "fioDental",
    descricao: "Biquinis Cores: A.I Aqua",
    preco: 149.9,
    preco_venda: 89.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 22,
    categoria: "fioDental",
    descricao: "Biquinis Cores: A.I Aqua",
    preco: 149.9,
    preco_venda: 89.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 23,
    categoria: "fioDental",
    descricao: "Biquinis Cores: Vede Oliva",
    preco: 169.9,
    preco_venda: 99.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 24,
    categoria: "fioDental",
    descricao: "Biquinis Cores: Vede Oliva",
    preco: 169.9,
    preco_venda: 99.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 25,
    categoria: "fioDental",
    descricao: "Biquinis Cores: Vede Oliva",
    preco: 129.9,
    preco_venda: 69.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 26,
    categoria: "fioDental",
    descricao: "Biquinis Cores: Vede Oliva",
    preco: 129.9,
    preco_venda: 69.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 27,
    categoria: "fioDental",
    descricao: "Biquinis Cores:Amarelo Bebê",
    preco: 99.9,
    preco_venda: 69.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 28,
    categoria: "fioDental",
    descricao: "Biquinis Cores:Amarelo Bebê",
    preco: 129.9,
    preco_venda: 89.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 29,
    categoria: "fioDental",
    descricao: "Biquinis Cores:Amarelo Bebê",
    preco: 129.9,
    preco_venda: 89.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 30,
    categoria: "fioDental",
    descricao: "Biquinis Cores: Azul Turquesa",
    preco: 99.9,
    preco_venda: 69.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 31,
    categoria: "fioDental",
    descricao: "Biquinis Cores: Azul Turquesa",
    preco: 149.9,
    preco_venda: 119.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 32,
    categoria: "fioDental",
    descricao: "Biquinis Cores: Azul Turquesa",
    preco: 189.9,
    preco_venda: 119.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 33,
    categoria: "fioDental",
    descricao: "Biquinis Cores: Azul Turquesa",
    preco: 169.9,
    preco_venda: 69.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 34,
    categoria: "fioDental",
    descricao: "Biquinis Cores: Azul Turquesa",
    preco: 169.9,
    preco_venda: 69.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 35,
    categoria: "cavado",
    descricao: "Biquinis Cores: Laranja e Rosa",
    preco: 169.9,
    preco_venda: 69.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 36,
    categoria: "cavado",
    descricao: "Biquinis Cores: Laranja e Rosa",
    preco: 99.9,
    preco_venda: 79.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 37,
    categoria: "cavado",
    descricao: "Biquinis Cores: Laranja e Rosa",
    preco: 99.9,
    preco_venda: 79.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 38,
    categoria: "cavado",
    descricao: "Biquinis Cores: Verde Oliva",
    preco: 89.9,
    preco_venda: 79.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 39,
    categoria: "cavado",
    descricao: "Biquinis Cores: Verde Oliva",
    preco: 89.9,
    preco_venda: 69.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 40,
    categoria: "cavado",
    descricao: "Biquinis Cores: Verde Oliva",
    preco: 129.9,
    preco_venda: 99.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 41,
    categoria: "cortininha",
    descricao: "Biquinis Cores: Verde Oliva",
    preco: 139.9,
    preco_venda: 119.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 42,
    categoria: "cortininha",
    descricao: "Biquinis Cores: Verde Oliva",
    preco: 149.9,
    preco_venda: 119.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 43,
    categoria: "cortininha",
    descricao: "Biquinis Cores: Branco",
    preco: 179.9,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 44,
    categoria: "cortininha",
    descricao: "Biquinis Cores: Branco",
    preco: 179.9,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 45,
    categoria: "cortininha",
    descricao: "Biquinis Cores: Branco",
    preco: 179.9,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 46,
    categoria: "cortininha",
    descricao: "Biquinis Cores: Preto",
    preco: 129.9,
    preco_venda: 99.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 47,
    categoria: "cortininha",
    descricao: "Biquinis Cores: Preto",
    preco: 129.9,
    preco_venda: 99.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 48,
    categoria: "cortininha",
    descricao: "Biquinis Cores: Preto",
    preco: 149.9,
    preco_venda: 119.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 49,
    categoria: "cortininha",
    descricao: "Biquinis Cores: Preto",
    preco: 179.9,
    preco_venda: 149.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 50,
    categoria: "tomaraQueCaia",
    descricao: "Biquinis Cores: Branco/Preto",
    preco: 179.9,
    preco_venda: 149.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 51,
    categoria: "tomaraQueCaia",
    descricao: "Biquinis Cores: Branco/Preto",
    preco: 179.9,
    preco_venda: 149.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 52,
    categoria: "tomaraQueCaia",
    descricao: "Biquinis Cores: Branco Preto",
    preco: 179.9,
    preco_venda: 149.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 53,
    categoria: "tomaraQueCaia",
    descricao: "Biquinis Cores: Branco/Preto",
    preco: 199.9,
    preco_venda: 169.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 54,
    categoria: "tomaraQueCaia",
    descricao: "Biquinis Cores: Verde Oliva",
    preco: 199.9,
    preco_venda: 169.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 55,
    categoria: "tomaraQueCaia",
    descricao: "Biquinis Cores: Verde Oliva",
    preco: 179.9,
    preco_venda: 149.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 56,
    categoria: "tomaraQueCaia",
    descricao: "Biquinis Cores: Verde Oliva",
    preco: 179.9,
    preco_venda: 149.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 57,
    categoria: "tomaraQueCaia",
    descricao: "Biquinis Cores: Verde Oliva",
    preco: 189.9,
    preco_venda: 149.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 58,
    categoria: "tomaraQueCaia",
    descricao: "Biquinis Cores: Amarelo Bebê",
    preco: 149.9,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 59,
    categoria: "tomaraQueCaia",
    descricao: "Biquinis Cores: Amarelo Bebê",
    preco: 149.9,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 60,
    categoria: "tomaraQueCaia",
    descricao: "Biquinis Cores: Amarelo Bebê",
    preco: 179.9,
    preco_venda: 149.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 61,
    categoria: "babado",
    descricao: "Biquinis Cores: Azul Turquesa",
    preco: 149.9,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 62,
    categoria: "babado",
    descricao: "Biquinis Cores: Azul Turquesa",
    preco: 149.9,
    preco_venda: 99.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 63,
    categoria: "babado",
    descricao: "Biquinis Cores: Azul Turquesa",
    preco: 149.9,
    preco_venda: 99.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 64,
    categoria: "babado",
    descricao: "Biquinis Cores: A.I Aqua",
    preco: 159.9,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 65,
    categoria: "babado",
    descricao: "Biquinis Cores: A.I Aqua",
    preco: 159.9,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
  {
    id_produto: 66,
    categoria: "babado",
    descricao: "Biquinis Cores: A.I Aqua",
    preco: 159.9,
    preco_venda: 129.9,
    imagem_produto: "estilo/imagens/foto_nao_disponivel.gif",
  },
];

export default produtos;
