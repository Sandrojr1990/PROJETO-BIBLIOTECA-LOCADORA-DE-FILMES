// Classe Livro

class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;

    }

    emprestar() {
        if (!this.emprestado) {
            this.emprestado = true;
            console.log(`Livro ${this.titulo} emprestado!.`);
        } else {
            console.log(`Livro ${this.titulo} já está emprestado!.`);
        }  
    }

    devolver() {
        if (this.emprestado) {
            this.emprestado = false;
            console.log(`Livro ${this.titulo} devolvido!.`);
        } else {
            console.log(`Livro ${this.titulo} não está emprestado!.`);
        }   
    }       
}

// Classe Filme

class Filme {
    constructor(titulo, diretor) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.emprestado = false;
    }

    emprestar() {
        if (!this.emprestado) {
            this.emprestado = true;
            console.log(`Filme ${this.titulo} emprestado!.`);
        } else {
            console.log(`Filme ${this.titulo} já está emprestado!.`);
        }
    }

    devolver() {
        if (this.emprestado) {
            this.emprestado = false;
            console.log(`Filme ${this.titulo} devolvido!.`);
        }
    }


}

// Classe Usuário

class Usuario {
    constructor(nome) {
        this.nome = nome;
    this.itensEmprestados = [];
    }

    pegarItem(item) {
        if (this.itensEmprestados.length >= 3) {
            console.log(`Usuário ${this.nome} já atingiu o limite de 3 itens emprestados.`);
            return;
        }
        if (!item.emprestado) {
            item.emprestar();
            this.itensEmprestados.push(item);
            console.log(`Usuário ${this.nome} pegou o item ${item.titulo}.`);
        } else {
            console.log(`Item ${item.titulo} já está emprestado!`);
        }
    }

    devolverItem(item) {
    const index = this.itensEmprestados.indexOf(item);
        if (index !== -1) {
        item.devolver();
    this.itensEmprestados.splice(index, 1);
        console.log(`Usuário ${this.nome} devolveu o item ${item.titulo}.`);
        } else {
            console.log(`Usuário ${this.nome} não tem o item ${item.titulo} emprestado.`);
        }
    }

    listarItens() {
        console.log(`Itens emprestados por ${this.nome}:`);
        this.itensEmprestados.forEach((item) => {
            console.log(`- ${item.titulo}`);
        });
    }
}

// Classe Biblioteca

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`Livro ${livro.titulo} adicionado à biblioteca.`);
    }

    listarLivros() {
        console.log('Livros da biblioteca:');
        this.livros.forEach((livro) => {
            console.log(`- ${livro.titulo} (${livro.autor}) - ${livro.emprestado ? 'Emprestado' : 'Disponivel'}`);
        });
    }
}

// Classe Locadora

class Locadora {
    constructor() {
        this.filmes = [];
    }

    adicionarFilme(filme) {
        this.filmes.push(filme);
        console.log(`Filme ${filme.titulo} adicionado à locadora.`);
    }

    listarFilmes() {
        console.log('Filmes da locadora:');
        this.filmes.forEach((filme) => {
            console.log(`- ${filme.titulo} (${filme.diretor}) - ${filme.emprestado ? 'Emprestado' : 'Disponìvel'}`);
        });
    }
}

// Criar objetos

const biblioteca = new Biblioteca();
const locadora = new Locadora();
const usuario1 = new Usuario('Sandro');
const usuario2 = new Usuario('Roberto');
const usuario3 = new Usuario('Silva');
const usuario4 = new Usuario('Clayton');

// Adicionar livros e filmes

const livro1 = new Livro('O Alienista', 'Machado de Assis');
const livro2 = new Livro('A Hora da Estrela', 'Clarice Lispector');
const livro3 = new Livro('O Meu Pé de Laranja Lima', 'José Mauro de Vasconcelos');
const livro4 = new Livro('Dom Casmurro', 'Machado de Assis');
const filme1 = new Filme('Cidade de Deus', 'Fernando Meirelles');
const filme2 = new Filme('Tropa de Elite', 'José Padilha');
const filme3 = new Filme('Central do Brasil', 'Walter Salles');
const filme4 = new Filme('O Auto da Compadecida', 'Guel Arraes');

// Adicionando livros e filmes às coleções

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);
biblioteca.adicionarLivro(livro4);
locadora.adicionarFilme(filme1);
locadora.adicionarFilme(filme2);
locadora.adicionarFilme(filme3);
locadora.adicionarFilme(filme4);

// Listando livros e filmes disponíveis

biblioteca.listarLivros();
locadora.listarFilmes();

// Usuário pega um livro emprestado

usuario1.pegarItem(livro1);
usuario3.pegarItem(livro3);
usuario3.pegarItem(livro4);
usuario4.pegarItem(livro1);

// Usuário tenta pegar o mesmo livro novamente

usuario2.pegarItem(livro1);

// Usuário devolve o livro

usuario1.devolverItem(livro1);

// Usuário pega um filme emprestado

usuario2.pegarItem(filme2);
usuario3.pegarItem(filme3);
usuario1.pegarItem(filme1);
usuario3.pegarItem(filme4);

// Listando itens emprestados por cada usuário

usuario1.listarItens();
usuario2.listarItens();
usuario3.listarItens();
usuario4.listarItens();




