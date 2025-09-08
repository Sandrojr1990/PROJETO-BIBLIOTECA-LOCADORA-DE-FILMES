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
        this.itensEmpretados = [];
    }

    pegarItem(item) {
        if (!item.emprestado) {
            item.emprestar();
            this.itensEmpretados.push(item);
            console.log(`Usuário ${this.nome} pegou o item ${item.titulo}.`);
        } else {
            console.log(`Item ${item.titulo} já está emprestado!.`);
        }
    }

    devolverItem(item) {
        const index = this.itensEmpretados.indexOf(item);
        if (index !== -1) {
        item.devolver();
        this.itensEmpretados.splice(index, 1);
        console.log(`Usuário ${this.nome} devolveu o item ${item.titulo}.`);
        } else {
            console.log(`Usuário ${this.nome} não tem o item ${item.titulo} emprestado.`);
        }
    }

    listarItens() {
        console.log(`Itens emprestados por ${this.nome}:`);
        this.itensEmpretados.forEach((item) => {
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

// Adicionar livros e filmes

const livro1 = new Livro('O Alienista', 'Machado de Assis');
const livro2 = new Livro('A Hora da Estrela', 'Clarice Lispector');
const filme1 = new Filme('Cidade de Deus', 'Fernando Meirelles');
const filme2 = new Filme('Tropa de Elite', 'José Padilha');


// Adicionando livros e filmes às coleções


biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
locadora.adicionarFilme(filme1);
locadora.adicionarFilme(filme2);

// Listando livros e filmes disponíveis


biblioteca.listarLivros();
locadora.listarFilmes();

// Usuário pega um livro emprestado


usuario1.pegarItem(livro1);


// Usuário tenta pegar o mesmo livro novamente


usuario2.pegarItem(livro1);


// Usuário devolve o livro


usuario1.devolverItem(livro1);


// Usuário pega um filme emprestado


usuario2.pegarItem(filme2);


// Listando itens emprestados por cada usuário


usuario1.listarItens();
usuario2.listarItens();



